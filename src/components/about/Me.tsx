import {Trans, useTranslation} from "next-i18next";
import Emoji from "@/src/components/about/Emoji";
import {Links} from "@/src/utils/links";
import LinkPreview from "@/src/components/LinkPreview";

export default function Me() {
    const { t } = useTranslation();
    const guitarYears: number = new Date().getFullYear() - 2014;

    return (
        <div
            className={[
                'block md:flex bg-white border border-slate-100 shadow-lg shadow-slate-100 rounded-3xl my-10 mx-auto',
                'w-11/12 md:w-10/12 xl:w-9/12 2xl:w-7/12',
                'dark:bg-black dark:border-slate-800 dark:shadow-slate-950',
                'motion-scale-in-75 motion-opacity-in-0 motion-blur-in'
            ].join(' ')}
        >
            <div className="w-full md:w-64 lg:w-80 2xl:w-2/5 shrink-0 p-0 md:p-2 2xl:p-0">
                <img
                    src="/img/about/about_me.webp"
                    alt="Thomas Lamothe"
                    className="rounded-t-3xl md:rounded-3xl 2xl:rounded-e-none"
                    fetchPriority="high"
                />
            </div>
            <div className="grow-0 lg:grow">
                <div className="p-5 2xl:p-10 2xl:pb-0">
                    <h1 className="font-vintage text-6xl flex gap-3 items-center mt-3 md:mt-0">
                        <span className="text-8xl text-slate-800 dark:text-slate-400 title-shadow dark:title-shadow-dark">
                            { t('about.me.title') }
                        </span>
                        <Emoji />
                    </h1>

                    <Trans i18nKey="about.me.introduction">
                        <p className="mt-4 main-text text-xl">
                            <span className={['italic line-through overflow-hidden'].join(' ')}>
                                { t('about.me.random') }
                            </span>
                        </p>
                    </Trans>

                    <div className="my-3 mx-auto w-64 h-[1px] bg-slate-200 dark:bg-slate-700"></div>

                    <p className="mt-2 main-text">{ t('about.me.working') }</p>

                    <Trans i18nKey="about.me.whatido">
                        <p className='main-text'>
                            <LinkPreview url={Links.php}>PHP</LinkPreview>
                            <LinkPreview url={Links.react}>React</LinkPreview>
                            <LinkPreview url={Links.vue}>Vue.js</LinkPreview>
                            <LinkPreview url={Links.tailwind}>Tailwind</LinkPreview>
                            <LinkPreview url={Links.docker}>Docker</LinkPreview>
                            <LinkPreview url={Links.aws}>AWS</LinkPreview>
                        </p>
                    </Trans>

                    <Trans i18nKey="about.me.projects">
                        <p className="main-text">
                            <LinkPreview url={Links.trax}>Trax</LinkPreview>
                        </p>
                    </Trans>

                    <p className="mt-2 main-text">
                        { t('about.me.hobbies', { guitarYears }) }
                    </p>
                    <p className="mt-2 main-text">{ t('about.me.findme') }</p>
                </div>
            </div>
        </div>
    )
}
