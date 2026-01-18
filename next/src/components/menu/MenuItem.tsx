import {ReactElement} from "react";
import {NavItem} from "@/src/types/menu";

export default function MenuItem({ page, onFollowItem, onHoverStop, onActiveChange }: {
    page: NavItem,
    onFollowItem: (element: HTMLElement) => void,
    onHoverStop: () => void,
    onActiveChange: (path: string) => void
}): ReactElement {

}
