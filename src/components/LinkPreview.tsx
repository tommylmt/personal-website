export default function LinkPreview({ children, url }: { children: string, url: string }) {
    return <a href={url} target='_blank'>
        {children}
    </a>
}
