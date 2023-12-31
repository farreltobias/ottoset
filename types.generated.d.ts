// Code generated by prismic-ts-codegen. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

/**
 * Item in *Carreira → Requisitos*
 */
export interface CareerDocumentDataRequirementsItem {
	/**
	 * Requisito field in *Carreira → Requisitos*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: Digite um requisito da vaga
	 * - **API ID Path**: career.requirements[].item
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	item: prismic.RichTextField;
}

/**
 * Item in *Carreira → Desejáveis*
 */
export interface CareerDocumentDataDesirableItem {
	/**
	 * Desejável field in *Carreira → Desejáveis*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: Digite uma característica desejável
	 * - **API ID Path**: career.desirable[].item
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	item: prismic.RichTextField;
}

/**
 * Content for Carreira documents
 */
interface CareerDocumentData {
	/**
	 * Título field in *Carreira*
	 *
	 * - **Field Type**: Title
	 * - **Placeholder**: Digite o título da vaga
	 * - **API ID Path**: career.title
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	title: prismic.TitleField;
	
	/**
	 * Requisitos field in *Carreira*
	 *
	 * - **Field Type**: Group
	 * - **Placeholder**: *None*
	 * - **API ID Path**: career.requirements[]
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#group
	 */
	requirements: prismic.GroupField<Simplify<CareerDocumentDataRequirementsItem>>;
	
	/**
	 * Desejáveis field in *Carreira*
	 *
	 * - **Field Type**: Group
	 * - **Placeholder**: *None*
	 * - **API ID Path**: career.desirable[]
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#group
	 */
	desirable: prismic.GroupField<Simplify<CareerDocumentDataDesirableItem>>;
}

/**
 * Carreira document from Prismic
 *
 * - **API ID**: `career`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type CareerDocument<Lang extends string = string> = prismic.PrismicDocumentWithUID<Simplify<CareerDocumentData>, "career", Lang>;

type CarouselDocumentDataSlicesSlice = BannerSlice

/**
 * Content for Carrossel documents
 */
interface CarouselDocumentData {
	/**
	 * Slice Zone field in *Carrossel*
	 *
	 * - **Field Type**: Slice Zone
	 * - **Placeholder**: *None*
	 * - **API ID Path**: carousel.slices[]
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#slices
	 */
	slices: prismic.SliceZone<CarouselDocumentDataSlicesSlice>;
}

/**
 * Carrossel document from Prismic
 *
 * - **API ID**: `carousel`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type CarouselDocument<Lang extends string = string> = prismic.PrismicDocumentWithoutUID<Simplify<CarouselDocumentData>, "carousel", Lang>;

type FaqDocumentDataSlicesSlice = PerguntasSlice

/**
 * Content for Perguntas Frequentes documents
 */
interface FaqDocumentData {
	/**
	 * Pergunta chave field in *Perguntas Frequentes*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: Qual a pergunta mais frequente?
	 * - **API ID Path**: faq.key_question
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	key_question: prismic.KeyTextField;
	
	/**
	 * Slice Zone field in *Perguntas Frequentes*
	 *
	 * - **Field Type**: Slice Zone
	 * - **Placeholder**: *None*
	 * - **API ID Path**: faq.slices[]
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#slices
	 */
	slices: prismic.SliceZone<FaqDocumentDataSlicesSlice>;
}

/**
 * Perguntas Frequentes document from Prismic
 *
 * - **API ID**: `faq`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type FaqDocument<Lang extends string = string> = prismic.PrismicDocumentWithoutUID<Simplify<FaqDocumentData>, "faq", Lang>;

type ProjectDocumentDataSlicesSlice = ArtigoSlice

/**
 * Content for Projeto documents
 */
interface ProjectDocumentData {
	/**
	 * Título field in *Projeto*
	 *
	 * - **Field Type**: Title
	 * - **Placeholder**: título do projeto
	 * - **API ID Path**: project.title
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	title: prismic.TitleField;
	
	/**
	 * descrição field in *Projeto*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: Descrição do projeto
	 * - **API ID Path**: project.description
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	description: prismic.RichTextField;
	
	/**
	 * Categoria field in *Projeto*
	 *
	 * - **Field Type**: Select
	 * - **Placeholder**: *None*
	 * - **API ID Path**: project.category
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#select
	 */
	category: prismic.SelectField<"Grupo Geradores" | "Energia Solar" | "Manutenção" | "Aviação">;
	
	/**
	 * Capa field in *Projeto*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: project.cover
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	cover: prismic.ImageField<never>;
	
	/**
	 * Slice Zone field in *Projeto*
	 *
	 * - **Field Type**: Slice Zone
	 * - **Placeholder**: *None*
	 * - **API ID Path**: project.slices[]
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#slices
	 */
	slices: prismic.SliceZone<ProjectDocumentDataSlicesSlice>;
}

/**
 * Projeto document from Prismic
 *
 * - **API ID**: `project`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ProjectDocument<Lang extends string = string> = prismic.PrismicDocumentWithUID<Simplify<ProjectDocumentData>, "project", Lang>;

export type AllDocumentTypes = CareerDocument | CarouselDocument | FaqDocument | ProjectDocument;

/**
 * Primary content in *Artigo → Primary*
 */
export interface ArtigoSliceDefaultPrimary {
	/**
	 * Título field in *Artigo → Primary*
	 *
	 * - **Field Type**: Title
	 * - **Placeholder**: Adicione um subtítulo
	 * - **API ID Path**: artigo.primary.title
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	title: prismic.TitleField;
	
	/**
	 * Imagem field in *Artigo → Primary*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: artigo.primary.image
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	image: prismic.ImageField<never>;
}

/**
 * Primary content in *Artigo → Items*
 */
export interface ArtigoSliceDefaultItem {
	/**
	 * Parágrafo field in *Artigo → Items*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: Adicione o conteúdo de seu projeto
	 * - **API ID Path**: artigo.items[].paragraph
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	paragraph: prismic.RichTextField;
}

/**
 * Default variation for Artigo Slice
 *
 * - **API ID**: `default`
 * - **Description**: Artigo
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ArtigoSliceDefault = prismic.SharedSliceVariation<"default", Simplify<ArtigoSliceDefaultPrimary>, Simplify<ArtigoSliceDefaultItem>>;

/**
 * Slice variation for *Artigo*
 */
type ArtigoSliceVariation = ArtigoSliceDefault

/**
 * Artigo Shared Slice
 *
 * - **API ID**: `artigo`
 * - **Description**: Artigo
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ArtigoSlice = prismic.SharedSlice<"artigo", ArtigoSliceVariation>;

/**
 * Primary content in *Banner → Primary*
 */
export interface BannerSliceDefaultPrimary {
	/**
	 * Título field in *Banner → Primary*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: Digite o título do banner
	 * - **API ID Path**: banner.primary.title
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	title: prismic.RichTextField;
	
	/**
	 * Descrição field in *Banner → Primary*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: Digite a descrição do banner
	 * - **API ID Path**: banner.primary.description
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	description: prismic.RichTextField;
	
	/**
	 * Plano de fundo field in *Banner → Primary*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: banner.primary.background
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	background: prismic.ImageField<never>;
	
	/**
	 * Link field in *Banner → Primary*
	 *
	 * - **Field Type**: Link
	 * - **Placeholder**: https://ottoset.com.br/servicos#grupo-geradores
	 * - **API ID Path**: banner.primary.navTo
	 * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
	 */
	navTo: prismic.LinkField;
}

/**
 * Default variation for Banner Slice
 *
 * - **API ID**: `default`
 * - **Description**: Banner
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type BannerSliceDefault = prismic.SharedSliceVariation<"default", Simplify<BannerSliceDefaultPrimary>, never>;

/**
 * Slice variation for *Banner*
 */
type BannerSliceVariation = BannerSliceDefault

/**
 * Banner Shared Slice
 *
 * - **API ID**: `banner`
 * - **Description**: Banner
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type BannerSlice = prismic.SharedSlice<"banner", BannerSliceVariation>;

/**
 * Primary content in *Perguntas → Primary*
 */
export interface PerguntasSliceDefaultPrimary {
	/**
	 * Categoria field in *Perguntas → Primary*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: Preencha a categoria das perguntas
	 * - **API ID Path**: perguntas.primary.category
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	category: prismic.KeyTextField;
}

/**
 * Primary content in *Perguntas → Items*
 */
export interface PerguntasSliceDefaultItem {
	/**
	 * Pergunta field in *Perguntas → Items*
	 *
	 * - **Field Type**: Title
	 * - **Placeholder**: Qual a pergunta?
	 * - **API ID Path**: perguntas.items[].question
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	question: prismic.TitleField;
	
	/**
	 * Resposta field in *Perguntas → Items*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: Preencha a resposta da sua pergunta
	 * - **API ID Path**: perguntas.items[].answer
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	answer: prismic.RichTextField;
}

/**
 * Default variation for Perguntas Slice
 *
 * - **API ID**: `default`
 * - **Description**: Perguntas
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type PerguntasSliceDefault = prismic.SharedSliceVariation<"default", Simplify<PerguntasSliceDefaultPrimary>, Simplify<PerguntasSliceDefaultItem>>;

/**
 * Slice variation for *Perguntas*
 */
type PerguntasSliceVariation = PerguntasSliceDefault

/**
 * Perguntas Shared Slice
 *
 * - **API ID**: `perguntas`
 * - **Description**: Perguntas
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type PerguntasSlice = prismic.SharedSlice<"perguntas", PerguntasSliceVariation>;

declare module "@prismicio/client" {
	interface CreateClient {
		(repositoryNameOrEndpoint: string, options?: prismic.ClientConfig): prismic.Client<AllDocumentTypes>;
	}
	
	namespace Content {
		export type {
			CareerDocument,
			CareerDocumentData,
			CareerDocumentDataRequirementsItem,
			CareerDocumentDataDesirableItem,
			CarouselDocument,
			CarouselDocumentData,
			CarouselDocumentDataSlicesSlice,
			FaqDocument,
			FaqDocumentData,
			FaqDocumentDataSlicesSlice,
			ProjectDocument,
			ProjectDocumentData,
			ProjectDocumentDataSlicesSlice,
			AllDocumentTypes,
			ArtigoSlice,
			ArtigoSliceDefaultPrimary,
			ArtigoSliceDefaultItem,
			ArtigoSliceVariation,
			ArtigoSliceDefault,
			BannerSlice,
			BannerSliceDefaultPrimary,
			BannerSliceVariation,
			BannerSliceDefault,
			PerguntasSlice,
			PerguntasSliceDefaultPrimary,
			PerguntasSliceDefaultItem,
			PerguntasSliceVariation,
			PerguntasSliceDefault
		}
	}
}