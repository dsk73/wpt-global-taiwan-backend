import type { Schema, Struct } from '@strapi/strapi';

export interface SharedCtaButton extends Struct.ComponentSchema {
  collectionName: 'components_shared_cta_buttons';
  info: {
    displayName: 'CTA Button';
  };
  attributes: {
    Label: Schema.Attribute.String;
    OpenInNewTab: Schema.Attribute.Boolean;
    URL: Schema.Attribute.String;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'SEO';
  };
  attributes: {
    CanonicalURL: Schema.Attribute.String;
    Keywords: Schema.Attribute.String;
    MetaDescription: Schema.Attribute.RichText;
    MetaTitle: Schema.Attribute.String;
    OGImage: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Robots: Schema.Attribute.Enumeration<['Primary']>;
  };
}

export interface SharedSocialLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_social_links';
  info: {
    displayName: 'Social Link';
  };
  attributes: {
    Active: Schema.Attribute.Boolean;
    DisplayOrder: Schema.Attribute.Integer;
    Icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Platform: Schema.Attribute.Enumeration<
      [
        'LINE',
        'Youtube',
        'Instagram',
        'Discord',
        'Facebook',
        'Telegram',
        'X',
        'TikTok',
        'Threads',
        'Website',
      ]
    >;
    URL: Schema.Attribute.String;
  };
}

export interface SharedStep extends Struct.ComponentSchema {
  collectionName: 'components_shared_steps';
  info: {
    displayName: 'Step';
  };
  attributes: {
    Description: Schema.Attribute.RichText;
    Icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export namespace Public {
    export interface ComponentSchemas {
      'shared.cta-button': SharedCtaButton;
      'shared.seo': SharedSeo;
      'shared.social-link': SharedSocialLink;
      'shared.step': SharedStep;
    }
  }
}
