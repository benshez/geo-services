import { ISlide } from '../../frontend/carousel/shared';

interface IConfigContent {
    content: {
        footerContent: string,
        homepageContent: string
    };
}

interface IConfigMeta {
    meta: {
        defaultMetaDescription: string,
        defaultMetaKeywords: string,
        defaultMetaTitle: string,
        defaultMetaRobots: string
    };
}

interface IConfigContact {
    contact: {
        AddressLine1: string,
        Email: string,
        Name: string,
        information: string
    };
}

interface IConfigDisqus {
    disqus: {
        shortname: string,
        status: number
    };
}

interface IConfigGeneral {
    general: {
        currency: string,
        paymentMethods: any
    };
}

interface IConfigLocale {
    locale: {
        available: any,
        primary: string
    };
}

interface ICarousel {
    carousel: {
        slideItems: Array<ISlide>;
        nextPhotoInterval: number;
        noLoopSlides: boolean;
    };
}

export interface IConfig extends IConfigContent, IConfigMeta, IConfigContact, IConfigDisqus, IConfigGeneral, IConfigLocale, ICarousel {

}
