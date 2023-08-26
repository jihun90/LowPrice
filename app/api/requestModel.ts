export interface SearchProductRequest {
    keyword: string;
    limit?: number;
    subId?: string;
    imageSize?: string;
    srqLinkOnly?: boolean;
}
