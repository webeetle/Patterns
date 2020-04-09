export interface Prototype {
    clone(): Prototype;
    toString(): string;
}

export class ConcreteProduct1 implements Prototype {

    clone() : Prototype {
        return new ConcreteProduct1();
    }

    toString(): string {
        return "Prodotto 1";
    }
}

export class ConcreteProduct2 implements Prototype {

    clone() : Prototype {
        return new ConcreteProduct2();
    }

    toString(): string {
        return "Prodotto 2";
    }
}

export class ConcreteProduct3 implements Prototype {

    clone() : Prototype {
        return new ConcreteProduct3();
    }

    toString(): string {
        return "Prodotto 3";
    }
}


export class Builder {
    private prototypeMap: { [s: string]: Prototype; } = {};

    constructor() {
        this.prototypeMap['cp1'] = new ConcreteProduct1();
        this.prototypeMap['cp2'] = new ConcreteProduct2();
        this.prototypeMap['cp3'] = new ConcreteProduct3();
    }

    createOne(s: string): Prototype {
        console.log(s);
        return this.prototypeMap[s].clone();
    }
}