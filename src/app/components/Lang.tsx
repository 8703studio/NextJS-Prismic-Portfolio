import { useRouter } from 'next/router';

export default function None(){
    const router = useRouter();
    const { locales, locale: activeLocale, defaultLocale} = router;

    return (
        <div>


        </div>
    )
}
