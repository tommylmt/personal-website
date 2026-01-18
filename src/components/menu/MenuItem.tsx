import {ReactElement} from "react";
import {NavItem} from "@/src/types/menu";
import Link from "next/link";

export default function MenuItem({ page, onFollowItem, onHoverStop, onActiveChange }: {
    page: NavItem,
    onFollowItem: (element: HTMLElement) => void,
    onHoverStop: () => void,
    onActiveChange: (path: string) => void
}): ReactElement {
    const mainClass = 'font-sans px-5 py-2 relative hover:text-white dark:text-white transition-color duration-300';
    const currentClass = 'current-item text-white';
    const classList = 'font-sans font-light';

    return (
        <li
            className={[mainClass, page.current ? currentClass : ''].join(' ')}
            onMouseOver={e => onFollowItem(e.target as HTMLElement)}
            onMouseLeave={onHoverStop}
        >
            {
                page.specialLink
                    ? <a v-else href={page.path} className={classList} target="_blank">{ page.name }</a>
                    : (
                        <Link
                            href={page.path}
                            v-if="!special"
                            onClick={() => onActiveChange(page.path)}
                            className={classList}
                        >
                            { page.name }
                        </Link>
                    )
            }
        </li>
    )
}
