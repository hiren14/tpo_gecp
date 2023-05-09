type Base = {
    _createdAt: string;
    _id: string;
    _rev: string;
    _type: string;
    _updatedAt: string;
};

interface Post extends Base {
    author: Author;
    dinter:string;
    dlast:string;
    vac:String;
    bond:Block[];
    inter:Block[];
    quali:String;
    sel:String;
    elig:String;
    package:String;
    gurl:String;
    loc:String;
    companyname: String;
    job: Block[];
    categories: Category[];
    comments: Comment[];
    mainImage: Image;
    slug: Slug;
    title: String;
    description: String;
    placeds:Placed;
}
// interface Sdata extends Base {
//     name: string;
//     position:string;
//     linkedln:string;
//     // companyname:string;
//     year:string;
//     package:string;
//     simg: IImage;
//     slug: Slug;
// }
// interface Placed extends Base {
//     companyname:string;
//     simg: IImage;
//     sdatas:Sdata;
//     slug: Slug;
// }

interface Author extends Base {
    bio: Block[];
    image: Image;
    name: String;
    slug: Slug;
}

interface Image {
    _type: "image";
    asset: Reference;
}

interface Reference {
    _ref: string;
    _type: "reference";
}

interface Slug {
    _type: "slug";
    current: string;
}

interface Block {
    _key: string;
    _type: "block";
    children: Span[];
    markDefs: any[];
    style: "normal" | "h1" | "h2" | "h3" | "h4" | "blockquote";
}

interface Span {
    _key: string;
    _type: "span";
    marks: string[];
    text: string;
}

interface Category extends Base {
    description: string;
    title: string;
}

// interface mainImage {
//     _type: "image";
//     asset: Reference;
// }

interface Title {
    _type: "string";
    current: string;
}
interface Comment extends Base {
    name: string;
  email: string;
  comment: string;
  active: boolean;
}