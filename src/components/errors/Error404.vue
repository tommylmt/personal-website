<template>
    <div class="h-screen w-screen relative flex justify-center overflow-hidden bg-black">
        <div
            :class="[
                'fixed left-5 bottom-6 md:bottom-10 rounded-2xl text-white font-sans text-xs motion-duration-200',
                'md:motion-translate-y-in-[150px] md:motion-scale-in-0 md:motion-blur-in md:motion-delay-1000',
                'bg-white/20 border border-slate-100/20 backdrop-blur-xl py-2 px-5'
            ]"
        >
            💡 Type
            <span class="bg-slate-100 px-1 mx-1 text-black font-mono rounded-md cursor-pointer" @click="displayHelp">help</span>
            to show available commands
        </div>

        <div class="w-10/12 md:w-6/12">
            <div ref="terminal" id="terminal"></div>
        </div>
    </div>
</template>

<style>
#terminal {
    --terminal-font: 'Google Sans Code', monospace;
    --terminal-accent-color: #ffffff;
    --terminal-error-color: #f87171;
}
</style>

<script>
import { initTerminal } from 'ttty'
import axios from 'axios'
import MenuHelper from '@/utils/MenuHelper'

export default {
    data() {
        return {
            terminal: null,
            user: 'visitor',
            host: window.location.host
        }
    },
    computed: {
        prompt() {
            return `<span class="!text-green-300">${this.user}@${this.host}</span>:<span class="!text-blue-600">~</span>$ `
        },
        routes() {
            const helper = new MenuHelper()

            return helper.routes.filter((r) => !r.specialLink).map((r) => r.path)
        }
    },
    mounted() {
        this.initTerminal()
    },
    methods: {
        initTerminal() {
            this.getMotd().then((motd) => {
                this.terminal = initTerminal(this.options(motd))
            })
        },
        async getMotd() {
            return await axios.get('/misc/motd.txt').then((res) => res.data)
        },
        displayHelp() {
            if (this.terminal) {
                this.terminal.print('help', true)
                this.terminal.run('help')
            }
        },
        options(motd) {
            return {
                host: this.$refs.terminal,
                welcomeMessage: motd + 'The resource you are looking for neither does not exist anymore or never existed.<br/><br/>',
                prompt: this.prompt,
                commands: {
                    ls: {
                        name: 'ls',
                        description: 'list available routes',
                        func: ({ print }) => {
                            print(this.routes.join('<br/>'))
                        }
                    },
                    exit: {
                        name: 'exit',
                        description: 'take you back to the main route',
                        func: (terminal) => {
                            terminal.print('Bye!')
                            this.$router.push('/')
                        }
                    },
                    goto: {
                        name: 'goto',
                        description: 'navigate to given route',
                        argDescriptions: ['given route'],
                        func: (terminal, route) => {
                            if (!route.startsWith('/')) {
                                terminal.print(this.error('Route must start with a "/"'))
                            } else if (!this.routes.includes(route)) {
                                terminal.print(this.error('The given route does not exists'))
                            } else {
                                terminal.print('Bye!')
                                this.$router.push(route)
                            }
                        }
                    },
                    echo: {
                        name: 'echo',
                        description: 'write arguments to the standard output',
                        argDescriptions: ['the string to display in console'],
                        func: (terminal, args) => {
                            terminal.print(args)
                        }
                    },
                    whoami: {
                        name: 'whoami',
                        description: 'display effective username',
                        func: (terminal) => {
                            terminal.print(this.user)
                        }
                    },
                    username: {
                        name: 'username',
                        description: 'change the username',
                        func: (terminal, newname) => {
                            if (!newname) {
                                terminal.print(this.error('a username is required'))
                            } else {
                                this.user = newname.toLowerCase().replaceAll(' ', '_')
                                terminal.setPrompt(this.prompt)
                            }
                        }
                    },
                    history: {
                        name: 'history',
                        description: 'show last executed commands',
                        func: (terminal) => {
                            terminal.print(
                                terminal.history.map((history, key) => `<span class="mx-4">${key + 1}</span> ${history}`).join('<br/>')
                            )
                        }
                    },
                    pwd: {
                        name: 'pwd',
                        description: 'display current path',
                        func: (terminal) => {
                            terminal.print(window.location.pathname)
                        }
                    },
                    clear: {
                        name: 'clear',
                        description: 'clear the terminal screen',
                        func: ({ commandContainer }) => {
                            commandContainer.innerHTML = ''
                        }
                    }
                }
            }
        },
        error(message) {
            return `<span class="terminal-error">${message}</span>`
        }
    }
}
</script>
