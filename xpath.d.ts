type SelectedValue = Node | Attr | string | number | boolean;
interface XPathSelect {
    (expression: string, node?: Node): Array<SelectedValue>;
    (expression: string, node: Node, single: true): SelectedValue;
}
export var select: XPathSelect;


export interface Xpath {

    // parse(expression: string)
    // select(expression: string, node?: Node): XPathSelect
    select1(expression: string, node?: Node): SelectedValue
    evaluate(expression: string, contextNode: Node, resolver: XPathNSResolver | null, type: number, result: XPathResult | null): XPathResult
    useNamespaces(namespaceMap: { [name: string]: string }): XPathSelect


    XPathResult: {
        ANY_TYPE: number
        NUMBER_TYPE: number
        STRING_TYPE: number
        BOOLEAN_TYPE : number
        UNORDERED_NODE_ITERATOR_TYPE: number
        ORDERED_NODE_ITERATOR_TYPE : number
        UNORDERED_NODE_SNAPSHOT_TYPE: number
        ORDERED_NODE_SNAPSHOT_TYPE: number
        ANY_UNORDERED_NODE_TYPE: number
        FIRST_ORDERED_NODE_TYPE: number
    }
}

export const xpath: Xpath
export default xpath
