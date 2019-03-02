/**
 *
 */
export interface Action {
    type: string;
    payload: any;
}

/**
 *
 */
export interface IPage<T> {
    success: boolean;
    error: any;
    data: Array<T>;
    code: number;
}

/**
 *
 */
export interface IPageRequest {
    start: number;
    end: number;
}

/**
 *
 */
export interface IResult<T> {
    success: boolean;
    data: T;
    obj?:any;
    error: any;
    code: number;
}

export interface IUpdateResponse {
    fieldCount: number;
    affectedRows: number;
    insertId: number;
    serverStatus: number;
    warningCount: number;
    message: string;
    protocol41: boolean;
    changedRows: number;
}

/**
 *
 */
export type ReturnType<T extends (...args: any[]) => any> = T extends (...args: any[]) => infer R ? R : never;

/**
 *
 * 商品
 *
 */
export interface IGoods {
    idg: number;
    sname: string;
    sdesc: any;
    stands: string;
    attribute: string;
    icode: string;
    goods: string;
    price: number;
    sprice: number;
    bcode: string;
    create_time: string;
    mod_time: string;
    flag: number;
    icon: string;
    size: any;
    bnum: {
        number: number;
        depot: string;
    };
    minNum: number;
    limitNum: number;
    rnum: string;
    depot: number;
    unit: Array<{
        id: number;
        label: string;
    }>;
    snum: number;
    anum: number;
    lprice: number;
    purchase: number;
    oprice: any;
    iprice: any;
    id: string;
    cname: string;
    cdesc: string;
    company: number;
    code: string;
    classify: number;
    brand: number;
    supplier: number;
    max: number;
    min: number;
    option: string;
    pic: Array<string>;
    attr: string;
    tag: string;
    nums: number;
    snums: number;
    style: any;
    styleFlag: any;
    brandFlag: any;
    picinfo: Array<string>;
    pricel: any;
    title: number;
    sort: number;
    extend: number;
    cflag: number;
    gid: number;
}

/**
 *
 * 订单
 *
 */
export interface ITrade {
    id: number;
    custom: string;
    //订单审核时间
    otime: any;
    express: string;
    bill: any;
  //运费
    DistributionFee: any;
    //税费
    taxes: number;
    cost: any;
    billTitle: string;
    //订单备注
    bdesc: string;
    odesc: any;
    linkman: any;
    //收货人电话
    phone: any;
    //收货人地址
    address: string;
    create_time: string;
    mod_time: string;
    flag: number;
    company: number;
    man: string;//制单人
    supplier: any;

    type: number;//单据状态
    ocontext: Array<ITradeItem>;
    size: number;
    weight: number;
    eprice: number;
    //特批价
    sprice: number;
    //订单总额
    oprice: number;
    billType: string;
    //发票内容
    billContext: string;
    //纳税人识别号
    identityNumber: string;
    attachment: any;
    order_code: string;//单号
    time: any;//交货日期
    replaced: number;
    cancel: any;
    sf: any;
    rmoney: number;
    dmoney: number;
    smoney: number;
    stime: string;  //提交时间
  //订单审核人
    oman: string;
    //财务审核人
    fman: string;

    orderTime: string;
    //财务审核时间
    fanTime: string;
    ccontext: any;

    //物流信息
    pcontext: {
      logistics:string;//物流公司
      oddNumber:string;//物流单号
      time:string;//发货时间
      desc:string;//物流备注
    };
    log: any;
    reject: any;
    border: number;
    //仓库
    depot: number;
    ctype: number;//财务状态
    otype: number;//售后状态
    agent: any;
    ocode: any;
    rate: any;
    itemCount: number;
}

/**
 * 订单商品
 */
export interface ITradeItem {
    idg: number;
    //规格名称
    sname: string;
    //规格描述
    sdesc: any;
    stands: Array<any>;
    attribute: any;
    //规格编号
    icode: string;
    goods: string;
    price: number;
    sprice: number;
    bcode: string;
    create_time: string;
    mod_time: string;
    flag: number;
    icon: string;
    size: any;
    bnum: Array<{
        number: number;
        depot: string;
        depotName: string;
    }>;
    minNum: number;
    limitNum: number;
    rnum: number;
    depot: number;
    unit: Array<{
        id: number;
        label: string;
    }>;
    snum: number;
    anum: number;
    lprice: number;
    purchase: number;
    oprice: any;
    iprice: any;
    id: string;
    cname: string;
    cdesc: string;
    company: number;
    code: string;
    classify: number;
    brand: number;
    supplier: number;
    max: number;
    min: number;
    option: string;
    pic: Array<string>;
    attr: Array<any>;
    tag: string;
    nums: number;
    snums: number;
    style: any;
    styleFlag: any;
    brandFlag: any;
    picinfo: Array<string>;
    pricel: any;
    title: number;
    sort: number;
    extend: number;
    cflag: number;
    gid: number;
    //数量
    number: number;
    onum: number;
    onumber: number;
    outed: number;
    outing: number;
    //备注
    desc: string;
    //单位
    sunit: number;
    //单价
    uprice: number;
    //小计
    subtotal: number;
    hidden: boolean;
}

/**
 *
 * 物流
 *
 */
export interface ILogistics {
    id: Number;
}

/**
 *
 * 售后单
 *
 */
export interface IAfterSales {
    id: number;
    custom: string;
    otime: any;
    express: any;
    bill: any;
    DistributionFee: any;
    taxes: number;
    cost: any;
    billTitle: any;
    bdesc: string;
    odesc: any;
    linkman: any;
    phone: any;
    address: any;
    create_time: string;
    mod_time: string;
    flag: number;
    company: number;
    man: string;
    supplier: number;
    type: number;
    ocontext: Array<ITradeItem>;
    //总体积
    size: number;
    //总重量
    weight: number;
    //
  //配送费用
    eprice: number;
    sprice: number;
    oprice: number;
    //发票类型  1 ? '普通发票' : '增值税发票'
    billType: any;
    billContext: any;
    identityNumber: any;
    attachment: string;
    order_code: string;
    time: string;
    replaced: number;
    cancel: any;
    sf: any;
    rmoney: number;
    dmoney: number;
    smoney: number;
    stime: string;
    oman: string;
    fman: string;
    orderTime: string;
    fanTime: string;
    ccontext: any;
    pcontext: any;
    log: any;
    reject: any;
    border: number;
    depot: number;
    ctype: number;
    otype: any;
    agent: any;
    ocode: any;
    rate: any;
    itemCount: number;
}

/**
 *
 * 客户
 *
 */
export interface ICustomer {
    cid: number;
    openid: string;
    employee: number;
    car: string;
    id: string;
    zipcode: any;
    money: number;
    cname: string;
    phone: string;
    email: string;
    qq: string;
    ccode: string;
    area: number;
    head: string;
    login_name: string;
    cpassword: string;
    type: number;
    depot: number;
    place: string;
    address: string;
    fax: string;
    bdesc: string;
    linkman: string;
    job: string;
    tel: string;
    bankname: string;
    account_name: string;
    caccount: string;
    taxpayer: string;
    bill_time: number;
    //发票抬头
    bill_title: string;
    alipay: string;
    weixinpay: string;
    flag: number;
}

/**
 * 商品sku
 */
export interface ISkuInfo {
  id: number;
  name: string;
  sdesc?: any;
  stands: string;
  attribute?: any;
  goods: string;
  price: string;
  sprice: string;
  code: string;
  bcode: string;
  create_time: Date;
  mod_time: Date;
  flag: number;
  icon: string;
  sid: string;
  idg: number[];
  snum: number;
  anum: number;
  depot: number;
  bnum: number;
  rnum: number;
  minNum: number;
  limitNum: number;
}


/**
 * 供货商信息
 */
export interface ISupllyInfo {
  id: number;
  cname: string;
  depot: number;
  linkman: string;
  iphone: string;
  tel: string;
  address: string;
  sdesc: string;
  company: number;
  create_time: Date;
  mod_time: Date;
  flag: number;
  legalname?: any;
  legalnature: string;
  legaladdress: string;
  marketaddress: string;
  marketname: string;
  administrativearea1: string;
  administrativearea2: string;
  administrativearea3: string;
  administrativearea4?: any;
  sendaddress: string;
  operatemode?: any;
  logoimgurl: string;
  headimgurl: string;
  operatelevel: string;
  operatedesc: string;
  identitycardimgurl_f?: any;
  identitycardimgurl_b?: any;
  operateimgurl?: any;
  operateimgurl2?: any;
  operatestate: string;
  loginname?: any;
  loginpwd?: any;
}


export interface IClassify {
  id: number;
  cname: string;
  cdesc: string;
  lever: number;
  father: number;
  company: number;
  create_time: Date;
  mod_time: Date;
  flag: number;
  type: number;
  pic: string;
  title: number;
  sort?: any;
}



export interface IAreaInfo {
  id: number;
  mname: string;
  code: string;
  lever: number;
  fid: number;
  create_time: Date;
  mod_time: Date;
  flag: number;
  type: number;
  company: number;
}
