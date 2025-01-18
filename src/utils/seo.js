import { i18n } from "@/utils/lang";

const { t } = i18n.global;

export function processSeo(meta) {
    document.title = t(meta.title);

    for (const [key, value] of Object.entries(meta.seo)) {
        document.querySelector(`head meta[name="${key}"]`)?.setAttribute('content', t(value));
    }

    for (const [key, value] of Object.entries(meta.og)) {
        document.querySelector(`head meta[property="${key}"]`)?.setAttribute('content', t(value));
    }
}
