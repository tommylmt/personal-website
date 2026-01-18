"use client"

import {ReactElement, useState} from "react";
import {NavItem} from "@/src/types/menu";
import MenuItem from "@/src/components/menu/MenuItem";

const LOCAL_SELECTORS = {
    menuListItem: '#mainMenu ul li',
    currenItem: '#mainMenu ul li.current-item'
}

export default function NavBar({ pages }: { pages: NavItem[] }): ReactElement {
    const [currentLeft, setCurrentLeft] = useState<string>('0');
    const [currentTop, setCurrentTop] = useState<string>('0');
    const [currentWidth, setCurrentWidth] = useState<string>('50px');
    const [openMenu, setOpenMenu] = useState<boolean>(false);
    const [clientHeight, setClientHeight] = useState<number>(0);
    const [localPages, setLocalPages] = useState<NavItem[]>(pages);

    const noResponsive = window.innerWidth >= 768;

    const handleHover = (e: HTMLElement) => {
        moveTracker(e)

        getCurrentItem().classList.remove('text-white')
        getCurrentItem().classList.add('text-slate-900')
    }

    const retrieveCurrent = () => {
        const current = getCurrentItem()

        if (current) {
            moveTracker(current)
            current.classList.add('text-white')
            current.classList.remove('text-slate-900')
        }
    }

    const moveTracker = (element: HTMLElement) => {
        setCurrentLeft(`${element.offsetLeft}px`)
        setCurrentWidth(`${element.clientWidth}px`)
        setCurrentTop(`${element.offsetTop}px`)
        setClientHeight(element.clientHeight)
    }

    const changeActivePage = (path: string) => {
        const newPages = structuredClone(localPages);
        newPages.forEach((element: NavItem) => {
            element.current = element.path === path
        })

        setLocalPages(newPages);
    }

    const getCurrentItem = (): HTMLElement => {
        return document.querySelector(LOCAL_SELECTORS.currenItem) as HTMLElement
    }

    return (
        <>
            <div
                className={[
                    'md:hidden fixed left-5 w-12 h-12 rounded-full flex items-center justify-center',
                    'bg-white/20 border border-slate-100/20 backdrop-blur-xl backdrop-saturate-200 z-[9999] transition-all bottom-6',
                    'shadow-md'
                ].join(' ')}
                onClick={() => setOpenMenu(prev => !prev)}
            >
                {
                    openMenu
                        ? <i className="ph-light ph-list text-3xl z-50 text-slate-900 dark:text-white absolute"></i>
                        : <i className="ph-light ph-x text-3xl z-50 text-slate-900 dark:text-white absolute"></i>
                }
            </div>
            <nav
                id="mainMenu"
                className={[
                    'fixed z-[9999] bottom-20 m-auto backdrop-blur-xl backdrop-saturate-200 p-2 rounded-xl md:rounded-[50px] shadow-md',
                    'bg-white/20 border border-slate-100/20 transition-all md:bottom-10',
                    'md:motion-translate-y-in-[150px] md:motion-scale-in-0 md:motion-blur-in md:motion-delay-500 motion-duration-300',
                    (openMenu || noResponsive ? '' : 'hidden')
                ].join(' ')}
            >
                <div
                    className="bg-black rounded-xl md:rounded-[45px] absolute transition-all duration-300"
                    style={{
                        left: currentLeft,
                        width: currentWidth,
                        top: currentTop,
                        height: `${clientHeight}px`
                    }}
                ></div>
                <ul className="md:flex gap-5 justify-between">
                    {
                        localPages.map(page => (
                            <MenuItem
                                page={page}
                                key={page.path}
                                onFollowItem={handleHover}
                                onHoverStop={retrieveCurrent}
                                onActiveChange={changeActivePage}
                            />
                        ))
                    }
                </ul>
            </nav>
        </>
    )
}
