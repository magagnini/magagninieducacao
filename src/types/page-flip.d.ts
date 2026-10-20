declare module 'page-flip' {
  export class PageFlip {
    constructor(element: HTMLElement, options?: any);
    loadFromImages(images: string[]): void;
    loadFromHTML(elements: NodeListOf<Element> | HTMLElement[]): void;
    destroy(): void;
    flipNext(): void;
    flipPrev(): void;
    turnToPage(pageIndex: number): void;
    turnToNextPage(): void;
    turnToPrevPage(): void;
    getCurrentPageIndex(): number;
    getPageCount(): number;
    on(event: string, callback: (e: any) => void): void;
    off(event: string, callback?: (e: any) => void): void;
  }
}
