import {ReactElement} from "react";
import {NavItem} from "@/src/types/menu";
import Link from "next/link";
import {useTranslation} from "next-i18next";

export default function MenuItem({ page, onFollowItem, onHoverStop, onActiveChange }: {
    page: NavItem,
    onFollowItem: (element: HTMLElement) => void,
    onHoverStop: () => void,
    onActiveChange: (path: string) => void
}): ReactElement {
    const { t } = useTranslation();
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
                    ? <a href={page.path} className={classList} target="_blank">{ t(page.name) }</a>
                    : (
                        <Link
                            href={page.path}
                            onClick={() => onActiveChange(page.path)}
                            className={classList}
                        >
                            { t(page.name) }
                        </Link>
                    )
            }
        </li>
    )
}
