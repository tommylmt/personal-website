<template>
    <div class="h-screen w-screen relative flex justify-center overflow-hidden bg-black">
        <div
            :class="[
                'fixed left-5 bottom-6 md:bottom-10 rounded-2xl text-white font-sans text-xs motion-duration-200',
                'md:motion-translate-y-in-[150px] md:motion-scale-in-0 md:motion-blur-in md:motion-delay-1000',
                'bg-white/20 border border-slate-100/20 backdrop-blur-xl py-2 px-5'
            ]"
        >
            💡 {{ $t('error.type') }}
            <span class="bg-slate-100 px-1 mx-1 text-black font-mono rounded-md cursor-pointer" @click="displayHelp">help</span>
            {{ $t('error.listcommands') }}
        </div>

        <div class="w-full lg:w-10/12 2xl:w-6/12">
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
@media screen and (max-width: 768px) {
    .terminal-type {
        display: block !important;
    }
}
</style>

<script lang="ts">
import { initTerminal } from 'ttty'
import axios from 'axios'
import MenuHelper from '@/utils/MenuHelper'
import type { TError404Data } from '@/types/app.ts'
import type { TerminalInstance } from 'ttty/dist/types/terminal'

export default {
    data(): TError404Data {
        return {
            terminal: null,
            user: 'visitor',
            host: window.location.host
        }
    },
    computed: {
        prompt() {
            return `<span class="text-green-300!">${this.user}@${this.host}</span>:<span class="!text-blue-600">~</span>$ `
        },
        routes() {
            const helper = new MenuHelper()

            return helper.routes.filter((r) => !r.specialLink).map((r) => r.path)
        },
        terminalElement() {
            return this.$refs.terminal as HTMLDivElement
        }
    },
    mounted() {
        this.initTerminal()
    },
    watch: {
        '$i18n.locale'() {
            this.terminal = null
            this.terminalElement.innerHTML = ''
            this.initTerminal()
        }
    },
    methods: {
        initTerminal() {
            this.getMotd().then((motd: string) => {
                this.terminal = initTerminal(this.options(motd))
            })
        },
        async getMotd() {
            return await axios.get<string>(`/misc/motd${window.innerWidth < 768 ? '_mobile' : ''}.txt`).then((res) => res.data)
        },
        displayHelp() {
            if (this.terminal) {
                this.terminal.print('help', true)
                this.terminal.run('help')
            }
        },
        options(motd: string) {
            return {
                host: this.terminalElement,
                welcomeMessage: motd + this.$t('error.notfound') + '.<br/><br/>',
                prompt: this.prompt,
                commands: {
                    ls: {
                        name: 'ls',
                        description: this.$t('error.terminal.ls'),
                        func: ({ print }: TerminalInstance) => {
                            print(this.routes.join('<br/>'))
                        }
                    },
                    exit: {
                        name: 'exit',
                        description: this.$t('error.terminal.exit'),
                        func: (terminal: TerminalInstance) => {
                            terminal.print(this.$t('error.exitmessage'))
                            window.location.href = '/'
                        }
                    },
                    goto: {
                        name: 'goto',
                        description: this.$t('error.terminal.goto'),
                        argDescriptions: [this.$t('error.args.route')],
                        func: (terminal: TerminalInstance, route: string) => {
                            if (!route.startsWith('/')) {
                                terminal.print(this.error(this.$t('error.errors.routestart')))
                            } else if (!this.routes.includes(route)) {
                                terminal.print(this.error(this.$t('error.errors.routedoesnotexist')))
                            } else {
                                terminal.print(this.$t('error.exitmessage'))
                                window.location.href = route
                            }
                        }
                    },
                    echo: {
                        name: 'echo',
                        description: this.$t('error.terminal.echo'),
                        argDescriptions: [this.$t('error.args.echo')],
                        func: (terminal: TerminalInstance, args: string) => {
                            terminal.print(args)
                        }
                    },
                    whoami: {
                        name: 'whoami',
                        description: this.$t('error.terminal.whoami'),
                        func: (terminal: TerminalInstance) => {
                            terminal.print(this.user)
                        }
                    },
                    username: {
                        name: 'username',
                        description: this.$t('error.terminal.username'),
                        func: (terminal: TerminalInstance, newname: string) => {
                            if (!newname) {
                                terminal.print(this.error(this.$t('error.errors.usernamerequired')))
                            } else {
                                this.user = newname.toLowerCase().replace(/ /gi, '_')
                                terminal.setPrompt(this.prompt)
                            }
                        }
                    },
                    history: {
                        name: 'history',
                        description: this.$t('error.terminal.history'),
                        func: (terminal: TerminalInstance) => {
                            terminal.print(
                                terminal.history.map((history, key) => `<span class="mx-4">${key + 1}</span> ${history}`).join('<br/>')
                            )
                        }
                    },
                    pwd: {
                        name: 'pwd',
                        description: this.$t('error.terminal.pwd'),
                        func: (terminal: TerminalInstance) => {
                            terminal.print(window.location.pathname)
                        }
                    },
                    clear: {
                        name: 'clear',
                        description: this.$t('error.terminal.clear'),
                        func: ({ commandContainer }: TerminalInstance) => {
                            commandContainer.innerHTML = ''
                        }
                    }
                }
            }
        },
        error(message: string) {
            return `<span class="terminal-error">${message}</span>`
        }
    }
}
</script>
