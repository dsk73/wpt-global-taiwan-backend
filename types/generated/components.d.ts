import type { Schema, Struct } from '@strapi/strapi';

export interface SharedAboutFeature extends Struct.ComponentSchema {
  collectionName: 'components_shared_about_features';
  info: {
    displayName: 'AboutFeature';
  };
  attributes: {
    Active: Schema.Attribute.Boolean;
    Description: Schema.Attribute.RichText;
    DisplayOrder: Schema.Attribute.Integer;
    Image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Title: Schema.Attribute.String;
  };
}

export interface SharedComponentPromotionBenefit
  extends Struct.ComponentSchema {
  collectionName: 'components_shared_component_promotion_benefits';
  info: {
    displayName: 'Promotion Benefit';
  };
  attributes: {
    Description: Schema.Attribute.Text;
    Icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Title: Schema.Attribute.String;
  };
}

export interface SharedCoreValues extends Struct.ComponentSchema {
  collectionName: 'components_shared_core_values';
  info: {
    displayName: 'CoreValues';
  };
  attributes: {};
}

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
    Label: Schema.Attribute.String;
    Platform: Schema.Attribute.String;
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

export interface SharedTeachingGuideSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_teaching_guide_sections';
  info: {
    displayName: 'Teaching Guide Section';
  };
  attributes: {
    Columns: Schema.Attribute.Integer;
    DisplayOrder: Schema.Attribute.Integer;
    Steps: Schema.Attribute.Component<'shared.teaching-guide-step', true>;
    Title: Schema.Attribute.String;
  };
}

export interface SharedTeachingGuideStep extends Struct.ComponentSchema {
  collectionName: 'components_shared_teaching_guide_steps';
  info: {
    displayName: 'Teaching Guide Step';
  };
  attributes: {
    Content: Schema.Attribute.RichText;
    DisplayOrder: Schema.Attribute.Integer;
    Image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    StepNumber: Schema.Attribute.Integer;
  };
}

declare module '@strapi/strapi' {
  export namespace Public {
    export interface ComponentSchemas {
      'shared.about-feature': SharedAboutFeature;
      'shared.component-promotion-benefit': SharedComponentPromotionBenefit;
      'shared.core-values': SharedCoreValues;
      'shared.cta-button': SharedCtaButton;
      'shared.seo': SharedSeo;
      'shared.social-link': SharedSocialLink;
      'shared.step': SharedStep;
      'shared.teaching-guide-section': SharedTeachingGuideSection;
      'shared.teaching-guide-step': SharedTeachingGuideStep;
    }
  }
}
