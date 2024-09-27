const es_toolkit = require('../dist');

class Es {
    constructor(value) {
        this._value = value;
    }

    value() {
        return this._value;
    }
};

for (const key in es_toolkit) {
    Es.prototype[key] = function(...args) {
        return new Es(es_toolkit[key](this.value(), ...args));
    };
}

es_toolkit.chain = value => new Es(value);

const data = [
    {
       tag: {
          name: 'tag1',
          media: {
             nodes: [
                {
                   id: 'uid1',
                   user: 'gracefullight',
                   caption: 'caption1',
                   likes: 10,
                },
                {
                   id: 'uid2',
                   user: 'gracefullight',
                   caption: 'caption2',
                   likes: 20,
                },
             ],
          },
       },
    },
    {
       tag: {
          name: 'tag2',
          media: {
             nodes: [
                {
                   id: 'uid3',
                   user: 'gracefullight',
                   caption: 'caption3',
                   likes: 30,
                },
                {
                   id: 'uid4',
                   user: 'gracefullight',
                   caption: 'caption4',
                   likes: 40,
                },
             ],
          },
       },
    },
];
 
console.log(es_toolkit.chain(data)
    .flatMap(e => e.tag.media.nodes)
    .value()
);