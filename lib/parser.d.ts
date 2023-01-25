declare type Nullable<T> = T | null;
export interface ASTNodeIntf {
    kind: ASTKinds;
}
export declare enum ASTKinds {
    idlfile = "idlfile",
    idlfile_$0_1 = "idlfile_$0_1",
    idlfile_$0_2 = "idlfile_$0_2",
    idlfile_$0_3 = "idlfile_$0_3",
    idlfile_$0_4 = "idlfile_$0_4",
    idlfile_$0_5 = "idlfile_$0_5",
    idlfile_$0_6 = "idlfile_$0_6",
    idlfile_$0_7 = "idlfile_$0_7",
    idlfile_$0_8 = "idlfile_$0_8",
    idlfile_$0_9 = "idlfile_$0_9",
    webidl = "webidl",
    typedef = "typedef",
    native = "native",
    native_$0 = "native_$0",
    native_$1 = "native_$1",
    interface_main = "interface_main",
    ifacebase = "ifacebase",
    ifacebody = "ifacebody",
    ifacebody_$0 = "ifacebody_$0",
    ifacebody_$0_$0 = "ifacebody_$0_$0",
    ifacebody_$0_$0_$0_1 = "ifacebody_$0_$0_$0_1",
    ifacebody_$0_$0_$0_2 = "ifacebody_$0_$0_$0_2",
    ifacebody_$0_$0_$0_3 = "ifacebody_$0_$0_$0_3",
    member = "member",
    member_$0 = "member_$0",
    member_$0_$0_1 = "member_$0_$0_1",
    member_$0_$0_2 = "member_$0_$0_2",
    member_$0_$1_1 = "member_$0_$1_1",
    member_$0_$1_2 = "member_$0_$1_2",
    member_$0_$1_3 = "member_$0_$1_3",
    member_$0_$1_4 = "member_$0_$1_4",
    member_$0_$1_5 = "member_$0_$1_5",
    enum_code = "enum_code",
    enum_code_$0_1 = "enum_code_$0_1",
    enum_code_$0_2 = "enum_code_$0_2",
    enum_code_$1_1 = "enum_code_$1_1",
    enum_code_$1_2 = "enum_code_$1_2",
    const_code = "const_code",
    attribute_code = "attribute_code",
    attribute_code_$0_1 = "attribute_code_$0_1",
    attribute_code_$0_2 = "attribute_code_$0_2",
    attribute_code_$1_1 = "attribute_code_$1_1",
    attribute_code_$1_2 = "attribute_code_$1_2",
    func = "func",
    paramlist = "paramlist",
    paramlist_$0 = "paramlist_$0",
    raises = "raises",
    raises_$0 = "raises_$0",
    attributes = "attributes",
    attributes_$0 = "attributes_$0",
    attribute = "attribute",
    attribute_$0 = "attribute_$0",
    attribute_$0_$0_1 = "attribute_$0_$0_1",
    attribute_$0_$0_2 = "attribute_$0_$0_2",
    param = "param",
    param_$0_1 = "param_$0_1",
    param_$0_2 = "param_$0_2",
    param_$0_3 = "param_$0_3",
    param_$1_1 = "param_$1_1",
    param_$1_2 = "param_$1_2",
    cenumlist = "cenumlist",
    cenumlist_$0 = "cenumlist_$0",
    cenumlist_$0_$0 = "cenumlist_$0_$0",
    cenumlist_$1 = "cenumlist_$1",
    cenum = "cenum",
    cenum_$0 = "cenum_$0",
    num_1 = "num_1",
    num_2 = "num_2",
    num_3 = "num_3",
    num_4 = "num_4",
    num_$0 = "num_$0",
    num_$0_$0_1 = "num_$0_$0_1",
    num_$0_$0_2 = "num_$0_$0_2",
    num_$0_$0_3 = "num_$0_$0_3",
    num_$1 = "num_$1",
    num_$2 = "num_$2",
    num_$2_$0_1 = "num_$2_$0_1",
    num_$2_$0_2 = "num_$2_$0_2",
    unary_1 = "unary_1",
    unary_2 = "unary_2",
    unary_3 = "unary_3",
    unary_4 = "unary_4",
    unary_$0 = "unary_$0",
    unary_$1 = "unary_$1",
    ANY_COMMENT_1 = "ANY_COMMENT_1",
    ANY_COMMENT_2 = "ANY_COMMENT_2",
    ANY_COMMENT_3 = "ANY_COMMENT_3",
    ANY_COMMENT_$0 = "ANY_COMMENT_$0",
    REGULAR_MULTILINE_COMMENT = "REGULAR_MULTILINE_COMMENT",
    DOC_COMMENT = "DOC_COMMENT",
    SINGLE_LINE_COMMENT = "SINGLE_LINE_COMMENT",
    NUMBER = "NUMBER",
    CDATA = "CDATA",
    INCLUDE = "INCLUDE",
    NATIVEID_TEXT = "NATIVEID_TEXT",
    NATIVEID = "NATIVEID",
    NATIVEID_$0 = "NATIVEID_$0",
    IID = "IID",
    IDENTIFIER_1 = "IDENTIFIER_1",
    IDENTIFIER_2 = "IDENTIFIER_2",
    IDENTIFIER_3 = "IDENTIFIER_3",
    IDENTIFIER_4 = "IDENTIFIER_4",
    IDENTIFIER_5 = "IDENTIFIER_5",
    IDENTIFIER_6 = "IDENTIFIER_6",
    IDENTIFIER_$0 = "IDENTIFIER_$0",
    _ = "_",
    RAW_CODE_FRAGMENT = "RAW_CODE_FRAGMENT",
    $EOF = "$EOF"
}
export interface idlfile {
    kind: ASTKinds.idlfile;
    contents: idlfile_$0[];
}
export declare type idlfile_$0 = idlfile_$0_1 | idlfile_$0_2 | idlfile_$0_3 | idlfile_$0_4 | idlfile_$0_5 | idlfile_$0_6 | idlfile_$0_7 | idlfile_$0_8 | idlfile_$0_9;
export declare type idlfile_$0_1 = _;
export declare type idlfile_$0_2 = CDATA;
export declare type idlfile_$0_3 = webidl;
export declare type idlfile_$0_4 = INCLUDE;
export declare type idlfile_$0_5 = interface_main;
export declare type idlfile_$0_6 = typedef;
export declare type idlfile_$0_7 = native;
export declare type idlfile_$0_8 = RAW_CODE_FRAGMENT;
export declare type idlfile_$0_9 = ANY_COMMENT;
export interface webidl {
    kind: ASTKinds.webidl;
}
export interface typedef {
    kind: ASTKinds.typedef;
}
export interface native {
    kind: ASTKinds.native;
}
export interface native_$0 {
    kind: ASTKinds.native_$0;
}
export interface native_$1 {
    kind: ASTKinds.native_$1;
}
export interface interface_main {
    kind: ASTKinds.interface_main;
    doc_comment: Nullable<DOC_COMMENT>;
    attrs: Nullable<attributes>;
    name: IDENTIFIER;
    base: Nullable<ifacebase>;
    body: Nullable<ifacebody>;
}
export interface ifacebase {
    kind: ASTKinds.ifacebase;
    extends: IDENTIFIER;
}
export interface ifacebody {
    kind: ASTKinds.ifacebody;
    contents: Nullable<ifacebody_$0>;
}
export interface ifacebody_$0 {
    kind: ASTKinds.ifacebody_$0;
    contents: ifacebody_$0_$0[];
}
export interface ifacebody_$0_$0 {
    kind: ASTKinds.ifacebody_$0_$0;
    contents: ifacebody_$0_$0_$0;
}
export declare type ifacebody_$0_$0_$0 = ifacebody_$0_$0_$0_1 | ifacebody_$0_$0_$0_2 | ifacebody_$0_$0_$0_3;
export declare type ifacebody_$0_$0_$0_1 = member;
export declare type ifacebody_$0_$0_$0_2 = RAW_CODE_FRAGMENT;
export declare type ifacebody_$0_$0_$0_3 = ANY_COMMENT;
export declare type member = member_$0;
export interface member_$0 {
    kind: ASTKinds.member_$0;
    docComment: member_$0_$0[];
    code: member_$0_$1;
}
export declare type member_$0_$0 = member_$0_$0_1 | member_$0_$0_2;
export declare type member_$0_$0_1 = DOC_COMMENT;
export declare type member_$0_$0_2 = SINGLE_LINE_COMMENT;
export declare type member_$0_$1 = member_$0_$1_1 | member_$0_$1_2 | member_$0_$1_3 | member_$0_$1_4 | member_$0_$1_5;
export declare type member_$0_$1_1 = CDATA;
export declare type member_$0_$1_2 = enum_code;
export declare type member_$0_$1_3 = const_code;
export declare type member_$0_$1_4 = attribute_code;
export declare type member_$0_$1_5 = func;
export interface enum_code {
    kind: ASTKinds.enum_code;
    name: IDENTIFIER;
    base: NUMBER;
    values: Nullable<cenumlist>;
}
export declare type enum_code_$0 = enum_code_$0_1 | enum_code_$0_2;
export declare type enum_code_$0_1 = ANY_COMMENT;
export declare type enum_code_$0_2 = _;
export declare type enum_code_$1 = enum_code_$1_1 | enum_code_$1_2;
export declare type enum_code_$1_1 = ANY_COMMENT;
export declare type enum_code_$1_2 = _;
export interface const_code {
    kind: ASTKinds.const_code;
    type: IDENTIFIER;
    name: IDENTIFIER;
    value: num;
}
export interface attribute_code {
    kind: ASTKinds.attribute_code;
    attributes: Nullable<attributes>;
    readonly: Nullable<string>;
    type: IDENTIFIER;
    name: IDENTIFIER;
}
export declare type attribute_code_$0 = attribute_code_$0_1 | attribute_code_$0_2;
export declare type attribute_code_$0_1 = ANY_COMMENT;
export declare type attribute_code_$0_2 = _;
export declare type attribute_code_$1 = attribute_code_$1_1 | attribute_code_$1_2;
export declare type attribute_code_$1_1 = _;
export declare type attribute_code_$1_2 = ANY_COMMENT;
export interface func {
    kind: ASTKinds.func;
    attributes: Nullable<attributes>;
    return_type: IDENTIFIER;
    name: IDENTIFIER;
    params: Nullable<paramlist>;
    raises: Nullable<raises>;
}
export interface paramlist {
    kind: ASTKinds.paramlist;
    first_param: param;
    other: paramlist_$0[];
}
export interface paramlist_$0 {
    kind: ASTKinds.paramlist_$0;
    param: param;
}
export interface raises {
    kind: ASTKinds.raises;
}
export interface raises_$0 {
    kind: ASTKinds.raises_$0;
}
export interface attributes {
    kind: ASTKinds.attributes;
    first_attribute: attribute;
    other_attributes: attributes_$0[];
}
export interface attributes_$0 {
    kind: ASTKinds.attributes_$0;
    attr: attribute;
}
export interface attribute {
    kind: ASTKinds.attribute;
    name: IDENTIFIER;
    param: Nullable<attribute_$0>;
}
export interface attribute_$0 {
    kind: ASTKinds.attribute_$0;
    value: attribute_$0_$0;
}
export declare type attribute_$0_$0 = attribute_$0_$0_1 | attribute_$0_$0_2;
export declare type attribute_$0_$0_1 = IID;
export declare type attribute_$0_$0_2 = IDENTIFIER;
export interface param {
    kind: ASTKinds.param;
    attribute: Nullable<attributes>;
    refType: Nullable<param_$0>;
    type: IDENTIFIER;
    name: IDENTIFIER;
}
export declare type param_$0 = param_$0_1 | param_$0_2 | param_$0_3;
export declare type param_$0_1 = string;
export declare type param_$0_2 = string;
export declare type param_$0_3 = string;
export declare type param_$1 = param_$1_1 | param_$1_2;
export declare type param_$1_1 = _;
export declare type param_$1_2 = ANY_COMMENT;
export interface cenumlist {
    kind: ASTKinds.cenumlist;
    first_value: cenum;
    other_values: cenumlist_$0[];
}
export interface cenumlist_$0 {
    kind: ASTKinds.cenumlist_$0;
    value: cenum;
}
export interface cenumlist_$0_$0 {
    kind: ASTKinds.cenumlist_$0_$0;
}
export interface cenumlist_$1 {
    kind: ASTKinds.cenumlist_$1;
}
export interface cenum {
    kind: ASTKinds.cenum;
    comment: DOC_COMMENT[];
    identifier: IDENTIFIER;
    value: Nullable<cenum_$0>;
}
export interface cenum_$0 {
    kind: ASTKinds.cenum_$0;
    value: num;
}
export declare type num = num_1 | num_2 | num_3 | num_4;
export declare type num_1 = num_$0;
export declare type num_2 = num_$1;
export declare type num_3 = num_$2;
export declare type num_4 = unary;
export interface num_$0 {
    kind: ASTKinds.num_$0;
}
export declare type num_$0_$0 = num_$0_$0_1 | num_$0_$0_2 | num_$0_$0_3;
export declare type num_$0_$0_1 = string;
export declare type num_$0_$0_2 = string;
export declare type num_$0_$0_3 = string;
export interface num_$1 {
    kind: ASTKinds.num_$1;
}
export interface num_$2 {
    kind: ASTKinds.num_$2;
}
export declare type num_$2_$0 = num_$2_$0_1 | num_$2_$0_2;
export declare type num_$2_$0_1 = string;
export declare type num_$2_$0_2 = string;
export declare type unary = unary_1 | unary_2 | unary_3 | unary_4;
export declare type unary_1 = unary_$0;
export declare type unary_2 = unary_$1;
export declare type unary_3 = IDENTIFIER;
export declare type unary_4 = NUMBER;
export interface unary_$0 {
    kind: ASTKinds.unary_$0;
}
export interface unary_$1 {
    kind: ASTKinds.unary_$1;
}
export declare type ANY_COMMENT = ANY_COMMENT_1 | ANY_COMMENT_2 | ANY_COMMENT_3;
export declare type ANY_COMMENT_1 = ANY_COMMENT_$0;
export declare type ANY_COMMENT_2 = REGULAR_MULTILINE_COMMENT;
export declare type ANY_COMMENT_3 = SINGLE_LINE_COMMENT;
export interface ANY_COMMENT_$0 {
    kind: ASTKinds.ANY_COMMENT_$0;
    doc: DOC_COMMENT;
}
export interface REGULAR_MULTILINE_COMMENT {
    kind: ASTKinds.REGULAR_MULTILINE_COMMENT;
}
export interface DOC_COMMENT {
    kind: ASTKinds.DOC_COMMENT;
    contents: string;
}
export interface SINGLE_LINE_COMMENT {
    kind: ASTKinds.SINGLE_LINE_COMMENT;
}
export declare type NUMBER = string;
export declare type CDATA = RAW_CODE_FRAGMENT;
export interface INCLUDE {
    kind: ASTKinds.INCLUDE;
    ident: IDENTIFIER;
}
export declare type NATIVEID_TEXT = string;
export interface NATIVEID {
    kind: ASTKinds.NATIVEID;
}
export interface NATIVEID_$0 {
    kind: ASTKinds.NATIVEID_$0;
}
export declare type IID = string;
export declare type IDENTIFIER = IDENTIFIER_1 | IDENTIFIER_2 | IDENTIFIER_3 | IDENTIFIER_4 | IDENTIFIER_5 | IDENTIFIER_6;
export declare type IDENTIFIER_1 = IDENTIFIER_$0;
export declare type IDENTIFIER_2 = string;
export declare type IDENTIFIER_3 = string;
export declare type IDENTIFIER_4 = string;
export declare type IDENTIFIER_5 = string;
export declare type IDENTIFIER_6 = string;
export interface IDENTIFIER_$0 {
    kind: ASTKinds.IDENTIFIER_$0;
}
export declare type _ = string;
export declare type RAW_CODE_FRAGMENT = string;
export declare class Parser {
    private readonly input;
    private pos;
    private negating;
    private memoSafe;
    constructor(input: string);
    reset(pos: PosInfo): void;
    finished(): boolean;
    clearMemos(): void;
    matchidlfile($$dpth: number, $$cr?: ErrorTracker): Nullable<idlfile>;
    matchidlfile_$0($$dpth: number, $$cr?: ErrorTracker): Nullable<idlfile_$0>;
    matchidlfile_$0_1($$dpth: number, $$cr?: ErrorTracker): Nullable<idlfile_$0_1>;
    matchidlfile_$0_2($$dpth: number, $$cr?: ErrorTracker): Nullable<idlfile_$0_2>;
    matchidlfile_$0_3($$dpth: number, $$cr?: ErrorTracker): Nullable<idlfile_$0_3>;
    matchidlfile_$0_4($$dpth: number, $$cr?: ErrorTracker): Nullable<idlfile_$0_4>;
    matchidlfile_$0_5($$dpth: number, $$cr?: ErrorTracker): Nullable<idlfile_$0_5>;
    matchidlfile_$0_6($$dpth: number, $$cr?: ErrorTracker): Nullable<idlfile_$0_6>;
    matchidlfile_$0_7($$dpth: number, $$cr?: ErrorTracker): Nullable<idlfile_$0_7>;
    matchidlfile_$0_8($$dpth: number, $$cr?: ErrorTracker): Nullable<idlfile_$0_8>;
    matchidlfile_$0_9($$dpth: number, $$cr?: ErrorTracker): Nullable<idlfile_$0_9>;
    matchwebidl($$dpth: number, $$cr?: ErrorTracker): Nullable<webidl>;
    matchtypedef($$dpth: number, $$cr?: ErrorTracker): Nullable<typedef>;
    matchnative($$dpth: number, $$cr?: ErrorTracker): Nullable<native>;
    matchnative_$0($$dpth: number, $$cr?: ErrorTracker): Nullable<native_$0>;
    matchnative_$1($$dpth: number, $$cr?: ErrorTracker): Nullable<native_$1>;
    matchinterface_main($$dpth: number, $$cr?: ErrorTracker): Nullable<interface_main>;
    matchifacebase($$dpth: number, $$cr?: ErrorTracker): Nullable<ifacebase>;
    matchifacebody($$dpth: number, $$cr?: ErrorTracker): Nullable<ifacebody>;
    matchifacebody_$0($$dpth: number, $$cr?: ErrorTracker): Nullable<ifacebody_$0>;
    matchifacebody_$0_$0($$dpth: number, $$cr?: ErrorTracker): Nullable<ifacebody_$0_$0>;
    matchifacebody_$0_$0_$0($$dpth: number, $$cr?: ErrorTracker): Nullable<ifacebody_$0_$0_$0>;
    matchifacebody_$0_$0_$0_1($$dpth: number, $$cr?: ErrorTracker): Nullable<ifacebody_$0_$0_$0_1>;
    matchifacebody_$0_$0_$0_2($$dpth: number, $$cr?: ErrorTracker): Nullable<ifacebody_$0_$0_$0_2>;
    matchifacebody_$0_$0_$0_3($$dpth: number, $$cr?: ErrorTracker): Nullable<ifacebody_$0_$0_$0_3>;
    matchmember($$dpth: number, $$cr?: ErrorTracker): Nullable<member>;
    matchmember_$0($$dpth: number, $$cr?: ErrorTracker): Nullable<member_$0>;
    matchmember_$0_$0($$dpth: number, $$cr?: ErrorTracker): Nullable<member_$0_$0>;
    matchmember_$0_$0_1($$dpth: number, $$cr?: ErrorTracker): Nullable<member_$0_$0_1>;
    matchmember_$0_$0_2($$dpth: number, $$cr?: ErrorTracker): Nullable<member_$0_$0_2>;
    matchmember_$0_$1($$dpth: number, $$cr?: ErrorTracker): Nullable<member_$0_$1>;
    matchmember_$0_$1_1($$dpth: number, $$cr?: ErrorTracker): Nullable<member_$0_$1_1>;
    matchmember_$0_$1_2($$dpth: number, $$cr?: ErrorTracker): Nullable<member_$0_$1_2>;
    matchmember_$0_$1_3($$dpth: number, $$cr?: ErrorTracker): Nullable<member_$0_$1_3>;
    matchmember_$0_$1_4($$dpth: number, $$cr?: ErrorTracker): Nullable<member_$0_$1_4>;
    matchmember_$0_$1_5($$dpth: number, $$cr?: ErrorTracker): Nullable<member_$0_$1_5>;
    matchenum_code($$dpth: number, $$cr?: ErrorTracker): Nullable<enum_code>;
    matchenum_code_$0($$dpth: number, $$cr?: ErrorTracker): Nullable<enum_code_$0>;
    matchenum_code_$0_1($$dpth: number, $$cr?: ErrorTracker): Nullable<enum_code_$0_1>;
    matchenum_code_$0_2($$dpth: number, $$cr?: ErrorTracker): Nullable<enum_code_$0_2>;
    matchenum_code_$1($$dpth: number, $$cr?: ErrorTracker): Nullable<enum_code_$1>;
    matchenum_code_$1_1($$dpth: number, $$cr?: ErrorTracker): Nullable<enum_code_$1_1>;
    matchenum_code_$1_2($$dpth: number, $$cr?: ErrorTracker): Nullable<enum_code_$1_2>;
    matchconst_code($$dpth: number, $$cr?: ErrorTracker): Nullable<const_code>;
    matchattribute_code($$dpth: number, $$cr?: ErrorTracker): Nullable<attribute_code>;
    matchattribute_code_$0($$dpth: number, $$cr?: ErrorTracker): Nullable<attribute_code_$0>;
    matchattribute_code_$0_1($$dpth: number, $$cr?: ErrorTracker): Nullable<attribute_code_$0_1>;
    matchattribute_code_$0_2($$dpth: number, $$cr?: ErrorTracker): Nullable<attribute_code_$0_2>;
    matchattribute_code_$1($$dpth: number, $$cr?: ErrorTracker): Nullable<attribute_code_$1>;
    matchattribute_code_$1_1($$dpth: number, $$cr?: ErrorTracker): Nullable<attribute_code_$1_1>;
    matchattribute_code_$1_2($$dpth: number, $$cr?: ErrorTracker): Nullable<attribute_code_$1_2>;
    matchfunc($$dpth: number, $$cr?: ErrorTracker): Nullable<func>;
    matchparamlist($$dpth: number, $$cr?: ErrorTracker): Nullable<paramlist>;
    matchparamlist_$0($$dpth: number, $$cr?: ErrorTracker): Nullable<paramlist_$0>;
    matchraises($$dpth: number, $$cr?: ErrorTracker): Nullable<raises>;
    matchraises_$0($$dpth: number, $$cr?: ErrorTracker): Nullable<raises_$0>;
    matchattributes($$dpth: number, $$cr?: ErrorTracker): Nullable<attributes>;
    matchattributes_$0($$dpth: number, $$cr?: ErrorTracker): Nullable<attributes_$0>;
    matchattribute($$dpth: number, $$cr?: ErrorTracker): Nullable<attribute>;
    matchattribute_$0($$dpth: number, $$cr?: ErrorTracker): Nullable<attribute_$0>;
    matchattribute_$0_$0($$dpth: number, $$cr?: ErrorTracker): Nullable<attribute_$0_$0>;
    matchattribute_$0_$0_1($$dpth: number, $$cr?: ErrorTracker): Nullable<attribute_$0_$0_1>;
    matchattribute_$0_$0_2($$dpth: number, $$cr?: ErrorTracker): Nullable<attribute_$0_$0_2>;
    matchparam($$dpth: number, $$cr?: ErrorTracker): Nullable<param>;
    matchparam_$0($$dpth: number, $$cr?: ErrorTracker): Nullable<param_$0>;
    matchparam_$0_1($$dpth: number, $$cr?: ErrorTracker): Nullable<param_$0_1>;
    matchparam_$0_2($$dpth: number, $$cr?: ErrorTracker): Nullable<param_$0_2>;
    matchparam_$0_3($$dpth: number, $$cr?: ErrorTracker): Nullable<param_$0_3>;
    matchparam_$1($$dpth: number, $$cr?: ErrorTracker): Nullable<param_$1>;
    matchparam_$1_1($$dpth: number, $$cr?: ErrorTracker): Nullable<param_$1_1>;
    matchparam_$1_2($$dpth: number, $$cr?: ErrorTracker): Nullable<param_$1_2>;
    matchcenumlist($$dpth: number, $$cr?: ErrorTracker): Nullable<cenumlist>;
    matchcenumlist_$0($$dpth: number, $$cr?: ErrorTracker): Nullable<cenumlist_$0>;
    matchcenumlist_$0_$0($$dpth: number, $$cr?: ErrorTracker): Nullable<cenumlist_$0_$0>;
    matchcenumlist_$1($$dpth: number, $$cr?: ErrorTracker): Nullable<cenumlist_$1>;
    matchcenum($$dpth: number, $$cr?: ErrorTracker): Nullable<cenum>;
    matchcenum_$0($$dpth: number, $$cr?: ErrorTracker): Nullable<cenum_$0>;
    matchnum($$dpth: number, $$cr?: ErrorTracker): Nullable<num>;
    matchnum_1($$dpth: number, $$cr?: ErrorTracker): Nullable<num_1>;
    matchnum_2($$dpth: number, $$cr?: ErrorTracker): Nullable<num_2>;
    matchnum_3($$dpth: number, $$cr?: ErrorTracker): Nullable<num_3>;
    matchnum_4($$dpth: number, $$cr?: ErrorTracker): Nullable<num_4>;
    matchnum_$0($$dpth: number, $$cr?: ErrorTracker): Nullable<num_$0>;
    matchnum_$0_$0($$dpth: number, $$cr?: ErrorTracker): Nullable<num_$0_$0>;
    matchnum_$0_$0_1($$dpth: number, $$cr?: ErrorTracker): Nullable<num_$0_$0_1>;
    matchnum_$0_$0_2($$dpth: number, $$cr?: ErrorTracker): Nullable<num_$0_$0_2>;
    matchnum_$0_$0_3($$dpth: number, $$cr?: ErrorTracker): Nullable<num_$0_$0_3>;
    matchnum_$1($$dpth: number, $$cr?: ErrorTracker): Nullable<num_$1>;
    matchnum_$2($$dpth: number, $$cr?: ErrorTracker): Nullable<num_$2>;
    matchnum_$2_$0($$dpth: number, $$cr?: ErrorTracker): Nullable<num_$2_$0>;
    matchnum_$2_$0_1($$dpth: number, $$cr?: ErrorTracker): Nullable<num_$2_$0_1>;
    matchnum_$2_$0_2($$dpth: number, $$cr?: ErrorTracker): Nullable<num_$2_$0_2>;
    matchunary($$dpth: number, $$cr?: ErrorTracker): Nullable<unary>;
    matchunary_1($$dpth: number, $$cr?: ErrorTracker): Nullable<unary_1>;
    matchunary_2($$dpth: number, $$cr?: ErrorTracker): Nullable<unary_2>;
    matchunary_3($$dpth: number, $$cr?: ErrorTracker): Nullable<unary_3>;
    matchunary_4($$dpth: number, $$cr?: ErrorTracker): Nullable<unary_4>;
    matchunary_$0($$dpth: number, $$cr?: ErrorTracker): Nullable<unary_$0>;
    matchunary_$1($$dpth: number, $$cr?: ErrorTracker): Nullable<unary_$1>;
    matchANY_COMMENT($$dpth: number, $$cr?: ErrorTracker): Nullable<ANY_COMMENT>;
    matchANY_COMMENT_1($$dpth: number, $$cr?: ErrorTracker): Nullable<ANY_COMMENT_1>;
    matchANY_COMMENT_2($$dpth: number, $$cr?: ErrorTracker): Nullable<ANY_COMMENT_2>;
    matchANY_COMMENT_3($$dpth: number, $$cr?: ErrorTracker): Nullable<ANY_COMMENT_3>;
    matchANY_COMMENT_$0($$dpth: number, $$cr?: ErrorTracker): Nullable<ANY_COMMENT_$0>;
    matchREGULAR_MULTILINE_COMMENT($$dpth: number, $$cr?: ErrorTracker): Nullable<REGULAR_MULTILINE_COMMENT>;
    matchDOC_COMMENT($$dpth: number, $$cr?: ErrorTracker): Nullable<DOC_COMMENT>;
    matchSINGLE_LINE_COMMENT($$dpth: number, $$cr?: ErrorTracker): Nullable<SINGLE_LINE_COMMENT>;
    matchNUMBER($$dpth: number, $$cr?: ErrorTracker): Nullable<NUMBER>;
    matchCDATA($$dpth: number, $$cr?: ErrorTracker): Nullable<CDATA>;
    matchINCLUDE($$dpth: number, $$cr?: ErrorTracker): Nullable<INCLUDE>;
    matchNATIVEID_TEXT($$dpth: number, $$cr?: ErrorTracker): Nullable<NATIVEID_TEXT>;
    matchNATIVEID($$dpth: number, $$cr?: ErrorTracker): Nullable<NATIVEID>;
    matchNATIVEID_$0($$dpth: number, $$cr?: ErrorTracker): Nullable<NATIVEID_$0>;
    matchIID($$dpth: number, $$cr?: ErrorTracker): Nullable<IID>;
    matchIDENTIFIER($$dpth: number, $$cr?: ErrorTracker): Nullable<IDENTIFIER>;
    matchIDENTIFIER_1($$dpth: number, $$cr?: ErrorTracker): Nullable<IDENTIFIER_1>;
    matchIDENTIFIER_2($$dpth: number, $$cr?: ErrorTracker): Nullable<IDENTIFIER_2>;
    matchIDENTIFIER_3($$dpth: number, $$cr?: ErrorTracker): Nullable<IDENTIFIER_3>;
    matchIDENTIFIER_4($$dpth: number, $$cr?: ErrorTracker): Nullable<IDENTIFIER_4>;
    matchIDENTIFIER_5($$dpth: number, $$cr?: ErrorTracker): Nullable<IDENTIFIER_5>;
    matchIDENTIFIER_6($$dpth: number, $$cr?: ErrorTracker): Nullable<IDENTIFIER_6>;
    matchIDENTIFIER_$0($$dpth: number, $$cr?: ErrorTracker): Nullable<IDENTIFIER_$0>;
    match_($$dpth: number, $$cr?: ErrorTracker): Nullable<_>;
    matchRAW_CODE_FRAGMENT($$dpth: number, $$cr?: ErrorTracker): Nullable<RAW_CODE_FRAGMENT>;
    test(): boolean;
    parse(): ParseResult;
    mark(): PosInfo;
    private loop;
    private run;
    private choice;
    private regexAccept;
    private tryConsume;
    private noConsume;
    private negate;
    private memoise;
    private match$EOF;
}
export declare function parse(s: string): ParseResult;
export interface ParseResult {
    ast: Nullable<idlfile>;
    errs: SyntaxErr[];
}
export interface PosInfo {
    readonly overallPos: number;
    readonly line: number;
    readonly offset: number;
}
export interface RegexMatch {
    readonly kind: "RegexMatch";
    readonly negated: boolean;
    readonly literal: string;
}
export declare type EOFMatch = {
    kind: "EOF";
    negated: boolean;
};
export declare type MatchAttempt = RegexMatch | EOFMatch;
export declare class SyntaxErr {
    pos: PosInfo;
    expmatches: MatchAttempt[];
    constructor(pos: PosInfo, expmatches: MatchAttempt[]);
    toString(): string;
}
declare class ErrorTracker {
    private mxpos;
    private regexset;
    private pmatches;
    record(pos: PosInfo, result: any, att: MatchAttempt): void;
    getErr(): SyntaxErr | null;
}
export {};
