/* eslint-disable no-undef */
const {
  resultadoTipoFuncionExpresadaVar,
  duplicarConFlecha,
  sumarMedianteExpresionNombrada,
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  crearGato,
  agregarPropiedad,
  invocarMetodo,
  multiplicarNumeroDesconocidoPorCinco,
  eliminarPropiedad,
  nuevoUsuario,
  tieneEmail,
  tienePropiedad,
  verificarPassword,
  actualizarPassword,
  agregarAmigo,
  pasarUsuarioAPremium,
  sumarLikesDeUsuario,
  agregarMetodoCalculoDescuento,
  invocarCallback,
  sumarArray,
  forEach,
  map,
  filter,
  sacarUltimoConPop,
  sacarPrimeroConShift,
  unirConSeparador,
  indicePrimero,
  indiceUltimo,
  existeConIncludes,
  subArregloCopia,
  pegarDosArreglos,
  aplicarSpliceDesde,
  invertirEnLugar,
  ordenarNumerosAsc,
  sumatorioConReduce,
  agruparPorCampoReduce,
  agruparPorCampoObjectGroupBy,
  encadenarOperacionesSinAnidar,
  objetoNombreMayuscConFlechaAnidada,
  establecerValorMismaReferencia,
} = require('../homework.js');

describe('devolverPrimerElemento(arr)', function () {
  it('should return the first item in the array', function () {
    expect(devolverPrimerElemento([10, 10, 16, 12])).toBe(10);
    expect(devolverPrimerElemento([97, 100, 80, 55, 72, 94])).toBe(97);
  });
});

describe('devolverUltimoElemento(arr)', function () {
  it('should return the last item in the array', function () {
    expect(devolverUltimoElemento([10, 10, 16, 12])).toBe(12);
    expect(devolverUltimoElemento([97, 100, 80, 55, 72, 94])).toBe(94);
    expect(devolverUltimoElemento(['hi', 'there', 'how', 'are', 'you', 'doing?'])).toBe('doing?');
  });
});

describe('obtenerLargoDelArray(arr)', function () {
  it('should return the length of the array', function () {
    expect(obtenerLargoDelArray([10, 10, 16, 12])).toBe(4);
    expect(obtenerLargoDelArray([97, 100, 80, 55, 72, 94])).toBe(6);
    expect(obtenerLargoDelArray(['hi', 'there', 'how', 'are', 'you', 'doing?'])).toBe(6);
  });
});

describe('incrementarPorUno(arr)', function () {
  it('should return the array with each value incremented by one', function () {
    expect(incrementarPorUno([10, 10, 16, 12])).toEqual([11, 11, 17, 13]);
    expect(incrementarPorUno([97, 100, 80, 55, 72, 94])).toEqual([98, 101, 81, 56, 73, 95]);
    expect(incrementarPorUno([])).toEqual([]);
  });
});

describe('agregarItemAlFinalDelArray(arr, item)', function () {
  it('should return the array with the item added to the end', function () {
    expect(agregarItemAlFinalDelArray([10, 10, 16, 12], 10)).toEqual([10, 10, 16, 12, 10]);
    expect(agregarItemAlFinalDelArray([97, 100, 80, 55, 72, 94], 'Hola')).toEqual([
      97,
      100,
      80,
      55,
      72,
      94,
      'Hola',
    ]);
    expect(agregarItemAlFinalDelArray([], true)).toEqual([true]);
  });
});

describe('agregarItemAlComienzoDelArray(arr, item)', function () {
  it('should return the array with the item added to the front', function () {
    expect(agregarItemAlComienzoDelArray([10, 10, 16, 12], 10)).toEqual([10, 10, 10, 16, 12]);
    expect(agregarItemAlComienzoDelArray([97, 100, 80, 55, 72, 94], 'Hola')).toEqual([
      'Hola',
      97,
      100,
      80,
      55,
      72,
      94,
    ]);
    expect(agregarItemAlComienzoDelArray([], true)).toEqual([true]);
  });
});

describe('dePalabrasAFrase(words)', function () {
  it('should return a string that has all of the words from the array separated by spaces', function () {
    expect(dePalabrasAFrase(['Henry', 'JavaScript', 'Class'])).toBe('Henry JavaScript Class');
    expect(dePalabrasAFrase(['Henry'])).toBe('Henry');
  });
});

describe('arrayContiene(arr, item)', function () {
  it('should return true if the array contains the item', function () {
    expect(arrayContiene([10, 10, 16, 12], 10)).toBe(true);
    expect(arrayContiene([97, 100, 80, 55, 72, 94], 'Hola')).toBe(false);
    expect(arrayContiene([], true)).toBe(false);
  });
});

describe('agregarNumeros(numbers)', function () {
  it('should add all of the numbers in the array together and return the sum', function () {
    expect(agregarNumeros([10, 10, 16])).toBe(36);
    expect(agregarNumeros([97, 100])).toBe(197);
    expect(agregarNumeros([0])).toBe(0);
  });
});

describe('promedioResultadosTest(testScores)', function () {
  it('should return the average test score', function () {
    expect(promedioResultadosTest([10, 10, 16, 12])).toBe(12);
    expect(promedioResultadosTest([97, 100, 80, 55, 72, 94])).toBe(83);
  });
});

describe('numeroMasGrande(numbers)', function () {
  it('should return the largest number', function () {
    expect(numeroMasGrande([10, 10, 16, 12])).toBe(16);
    expect(numeroMasGrande([97, 100, 80, 55, 72, 94])).toBe(100);
    expect(numeroMasGrande([97, 10000, 80, 55, 7.2, -94])).toBe(10000);
  });
});

describe('multiplicarArgumentos()', function () {
  it('should return the product of all the arguments', function () {
    const product = multiplicarArgumentos(5, 5);
    const product2 = multiplicarArgumentos();
    const product3 = multiplicarArgumentos(3, 3, 3, 3);
    const product4 = multiplicarArgumentos(1);
    const product5 = multiplicarArgumentos(10, 0, 10);
    expect(product).toBe(25);
    expect(product2).toBe(0);
    expect(product3).toBe(81);
    expect(product4).toBe(1);
    expect(product5).toBe(0);
  });
});

describe('crearGato(nombre, edad)', function () {
  it('should create a new cat with the nombre and edad properties set', function () {
    expect(crearGato('Snowball', 1).nombre).toBe('Snowball');
    expect(crearGato('Snowball', 1).edad).toBe(1);
    expect(crearGato('Snowball II', 5).nombre).toBe('Snowball II');
    expect(crearGato('Snowball II', 5).edad).toBe(5);
  });
  it('should add a method called meow to the new cat object', function () {
    expect(crearGato('Snowball III', 2).meow()).toBe('Meow!');
  });
});

describe('agregarPropiedad(object, property)', function () {
  it('should add the property to the object with a value of null', function () {
    const object = {
      x: 1,
      y: 2,
    };
    const updatedObject = {
      x: 1,
      y: 2,
      z: null,
    };
    expect(agregarPropiedad(object, 'z')).toEqual(updatedObject);
  });
});

describe('invocarMetodo(object, method)', function () {
  it('should invoke the method on the object', function () {
    const object = {
      x: 0,
      incrementX: function () {
        this.x++;
      },
    };
    invocarMetodo(object, 'incrementX');
    expect(object.x).toBe(1);
  });
});

describe('multiplicarNumeroDesconocidoPorCinco(mysteryNumberObject)', function () {
  it('should return the mysteryNumber property multiplied by five', function () {
    const mysteryBox = {
      numeroMisterioso: 999,
    };
    expect(multiplicarNumeroDesconocidoPorCinco(mysteryBox)).toBe(4995);
    mysteryBox.numeroMisterioso = -5;
    expect(multiplicarNumeroDesconocidoPorCinco(mysteryBox)).toBe(-25);
  });
});

describe('eliminarPropiedad(object, property)', function () {
  it('should delete the property from the object', function () {
    const updatedObject = {
      x: 1,
      y: 2,
    };
    const object = {
      x: 1,
      y: 2,
      z: null,
    };
    expect(eliminarPropiedad(object, 'z')).toEqual(updatedObject);
  });
});

describe('nuevoUsuario(nombre, email, password)', function () {
  it('should return a new user object with a nombre, email, and password property that match the arguments', function () {
    const user = {
      nombre: 'Jhon',
      email: 'jhon@email.com',
      password: 'correcthorsebatterystaple',
    };
    expect(nuevoUsuario(user.nombre, user.email, user.password)).toEqual(user);
    const user2 = {
      nombre: 'Samuel',
      email: 'samuel@email.com',
      password: 'password',
    };
    expect(nuevoUsuario(user2.nombre, user2.email, user2.password)).toEqual(user2);
  });
});

describe('tieneEmail(user)', function () {
  it('should return true if the user object has a value for its email property', function () {
    expect(tieneEmail({ usernombre: 'Samuel', email: 'samuel@email.com' })).toEqual(true);
    expect(tieneEmail({ usernombre: 'Jhon', email: null })).toEqual(false);
    expect(tieneEmail({ usernombre: 'Antonio' })).toEqual(false);
  });
});

describe('tienePropiedad(object, property)', function () {
  it('should return true if the object has the property that is passed in', function () {
    const obj = {
      x: true,
    };
    expect(tienePropiedad(obj, 'x')).toEqual(true);
    expect(tienePropiedad(obj, 'y')).toEqual(false);
  });
});

describe('verificarPassword(user, password)', function () {
  it('should return true if passwords match', function () {
    const user = {
      password: 'Me encanta JS!',
    };
    const password = 'Me encanta JS!';
    expect(verificarPassword(user, password)).toBe(true);
  });
  it('should return false if passwords do not match', function () {
    const user = {
      password: 'Me encanta JS!',
    };
    const password = 'Hacker time!';
    expect(verificarPassword(user, password)).toBe(false);
  });
});

describe('actualizarPassword(user, password)', function () {
  it('should return the user object with the updated password', function () {
    const user = {
      password: 'Me encanta JS!',
    };
    const password = 'Me encanta JS mucho más!';
    expect(actualizarPassword(user, password).password).toBe(password);
  });
});

describe('agregarAmigo(user, newFriend)', function () {
  it('should add a new friend to the end of the amigos array property', function () {
    const user = {
      amigos: ['Ben', 'Austen', 'Ryan', 'Mike', 'Young'],
    };
    const newFriend = 'Shay';
    expect(agregarAmigo(user, 'Shay').amigos.pop()).toBe('Shay');
  });
});

describe('pasarUsuarioAPremium(users)', function () {
  it("should return the users array with each user's esPremium property set to true", function () {
    const users = [
      { esPremium: false },
      { esPremium: false },
      { esPremium: false },
      { esPremium: false },
      { esPremium: false },
    ];
    const updatedUsers = [
      { esPremium: true },
      { esPremium: true },
      { esPremium: true },
      { esPremium: true },
      { esPremium: true },
    ];
    expect(pasarUsuarioAPremium(users)).toEqual(updatedUsers);
  });
});

describe('sumarLikesDeUsuario(user)', function () {
  it('should return the sum of likes for all user posts', function () {
    const user = {
      usernombre: 'Jhon Doe',
      password: 'JavaScript es genial!',
      posts: [
        {
          id: '1',
          title: 'Aventuras en JS!',
          likes: 10,
        },
        {
          id: '2',
          title: 'Soy Henry!',
          likes: 100,
        },
        {
          id: '3',
          title: 'Qué es un JavaScript?',
          likes: 35,
        },
        {
          id: '4',
          title: 'JS Objects for Dummies',
          likes: 42,
        },
        {
          id: '5',
          title: 'Educación online',
          likes: 99,
        },
      ],
    };
    expect(sumarLikesDeUsuario(user)).toBe(286);
  });
});

describe('agregarMetodoCalculoDescuento(storeItem)', function () {
  const storeItem = {
    precio: 80,
    porcentajeDeDescuento: 0.1,
  };
  const storeItem2 = {
    precio: 5,
    porcentajeDeDescuento: 0.5,
  };

  it("should add the method 'calcularPrecioDescuento' to the store item object", function () {
    expect(agregarMetodoCalculoDescuento(storeItem).calcularPrecioDescuento).toBeDefined();
    expect(agregarMetodoCalculoDescuento(storeItem2).calcularPrecioDescuento).toBeDefined();
  });
  it("should return the discount precio from the new 'precioConDescuento' method", function () {
    expect(agregarMetodoCalculoDescuento(storeItem).calcularPrecioDescuento()).toBe(72);
    expect(agregarMetodoCalculoDescuento(storeItem2).calcularPrecioDescuento()).toBe(2.5);
  });
});

describe('invocarCallback(cb)', function () {
  it('should invoke the callback that is passed in', function () {
    const cb = jest.fn();
    invocarCallback(cb);
    expect(cb).toHaveBeenCalled();
  });
});

describe('sumarArray(cb)', function () {
  it('should pass the sum of all array numbers to cb', function (done) {
    sumarArray([1, 2, 3, 4, 5], function (sum) {
      expect(sum).toBe(15);
      done();
    });
  });
});

describe('forEach(arr, cb)', function () {
  it('should pass all array items one by one to cb', function () {
    const nums = [];
    forEach([1, 2, 3, 4, 5], function (num) {
      nums.push(num);
    });
    expect(nums).toEqual([1, 2, 3, 4, 5]);
  });
});

describe('map(arr, cb)', function () {
  it('should return an array of all the processed array elements', function () {
    const squares = map([1, 2, 3, 4, 5], function (num) {
      return num * num;
    });
    expect(squares).toEqual([1, 4, 9, 16, 25]);
  });
});

describe('resultadoTipoFuncionExpresadaVar', function () {
  it('debe ser typeof correcto ante hoisting var + expresión', function () {
    expect(resultadoTipoFuncionExpresadaVar).toBe('undefined');
  });
});

describe('duplicarConFlecha', function () {
  it('debe ser función flecha que duplica número', function () {
    expect(typeof duplicarConFlecha).toBe('function');
    expect(duplicarConFlecha(6)).toBe(12);
  });
});

describe('sumarMedianteExpresionNombrada', function () {
  it('suma con expresión de función nominada internamente', function () {
    expect(sumarMedianteExpresionNombrada(-1, 4)).toBe(3);
  });
});

describe('filter(arr, cb)', function () {
  it('nuevo array con elementos donde cb fue truthy', function () {
    const out = filter([1, 2, 3, 4, 5], function (n) {
      return n % 2 === 0;
    });
    expect(out).toEqual([2, 4]);
  });
});

describe('sacarUltimoConPop', function () {
  it('devuelve el último y muta el arreglo', function () {
    const a = ['a', 'b', 'c'];
    expect(sacarUltimoConPop(a)).toBe('c');
    expect(a).toEqual(['a', 'b']);
  });
});

describe('sacarPrimeroConShift', function () {
  it('devuelve el primero y muta el arreglo', function () {
    const a = [10, 20];
    expect(sacarPrimeroConShift(a)).toBe(10);
    expect(a).toEqual([20]);
  });
});

describe('unirConSeparador', function () {
  it('usa join sobre copia estable', function () {
    const partes = ['x', 'y', 'z'];
    expect(unirConSeparador(partes, '|')).toBe('x|y|z');
    expect(partes).toEqual(['x', 'y', 'z']);
  });
});

describe('indicePrimero / indiceUltimo / existeConIncludes', function () {
  const base = ['a', 'b', 'a', 'c'];
  it('indexOf correcto', function () {
    expect(indicePrimero(base, 'a')).toBe(0);
    expect(indicePrimero(base, 'z')).toBe(-1);
  });
  it('lastIndexOf correcto', function () {
    expect(indiceUltimo(base, 'a')).toBe(2);
    expect(indiceUltimo(base, 'b')).toBe(1);
  });
  it('includes correcto', function () {
    expect(existeConIncludes(base, 'c')).toBe(true);
    expect(existeConIncludes(base, 'x')).toBe(false);
  });
});

describe('subArregloCopia', function () {
  it('slice no altera fuente', function () {
    const src = [0, 1, 2, 3];
    expect(subArregloCopia(src, 1, 3)).toEqual([1, 2]);
    expect(src).toEqual([0, 1, 2, 3]);
  });
});

describe('pegarDosArreglos', function () {
  it('concat sin mutar entradas', function () {
    const a = [1];
    const b = [2, 3];
    expect(pegarDosArreglos(a, b)).toEqual([1, 2, 3]);
    expect(a).toEqual([1]);
    expect(b).toEqual([2, 3]);
  });
});

describe('aplicarSpliceDesde', function () {
  it('splice mutable con inserción', function () {
    const data = [10, 20, 30];
    const mismo = aplicarSpliceDesde(data, 1, 2, 99);
    expect(mismo).toBe(data);
    expect(data).toEqual([10, 99]);
  });
});

describe('invertirEnLugar', function () {
  it('reverse mutante', function () {
    const w = ['uno', 'dos'];
    expect(invertirEnLugar(w)).toBe(w);
    expect(w).toEqual(['dos', 'uno']);
  });
});

describe('ordenarNumerosAsc', function () {
  it('orden numérico comparando valores', function () {
    const n = [9, -1, 3, 0];
    ordenarNumerosAsc(n);
    expect(n).toEqual([-1, 0, 3, 9]);
  });
});

describe('sumatorioConReduce', function () {
  it('acumula con reduce', function () {
    expect(sumatorioConReduce([5, -2, 1], 0)).toBe(4);
    expect(sumatorioConReduce([], 100)).toBe(100);
  });
});

describe('agruparPorCampoReduce', function () {
  it('produce mapa campo -> elementos', function () {
    const list = [
      { id: 1, zona: 'A' },
      { id: 2, zona: 'B' },
      { id: 3, zona: 'A' },
    ];
    const g = agruparPorCampoReduce(list, 'zona');
    expect(Object.keys(g).sort()).toEqual(['A', 'B']);
    expect(g.A.length).toBe(2);
    expect(g.B[0].id).toBe(2);
  });
});

describe('agruparPorCampoObjectGroupBy', function () {
  it('Object.groupBy igual estructura', function () {
    const datos = [
      { t: 'x', v: 1 },
      { t: 'y', v: 2 },
      { t: 'x', v: 3 },
    ];
    const h = agruparPorCampoObjectGroupBy(datos, 't');
    expect(
      h.x.map(function (i) {
        return i.v;
      }),
    ).toEqual([1, 3]);
    expect(h.y.length).toBe(1);
  });
});

describe('encadenarOperacionesSinAnidar', function () {
  it('pipe síncrono con array de callbacks', function () {
    const res = encadenarOperacionesSinAnidar(5, [
      function (n) {
        return n + 10;
      },
      function (n) {
        return n / 5;
      },
    ]);
    expect(res).toBe(3);
  });
});

describe('objetoNombreMayuscConFlechaAnidada', function () {
  it('flecha anidada enlaza el this del método contenedor', function () {
    expect(objetoNombreMayuscConFlechaAnidada('ana').enMayuscMedianteFlecha()).toBe('ANA');
  });
});

describe('establecerValorMismaReferencia', function () {
  it('muta objeto sin nueva referencia', function () {
    const base = {};
    const ret = establecerValorMismaReferencia(base, 'clave', 'ok');
    expect(ret).toBe(base);
    expect(base.clave).toBe('ok');
  });
});
