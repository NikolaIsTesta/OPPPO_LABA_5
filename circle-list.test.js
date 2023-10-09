import { CircularLinkedList } from './circle-list.js'
import { Mouse } from './office-equipment.js'

test('list.append', () => {
    const list = new CircularLinkedList();
    for (let i = 0; i < 10; i++){
        list.append('object_No'+i.toString())
    }
    expect(list.length).toStrictEqual(10)
});

test('list.remove many elements', () => {
    const list = new CircularLinkedList();
    list.append({"property_1":1, "property_2":3});
    list.append({"property_1":1, "property_2":4});
    list.append({"property_1":2, "property_2":4});
    list.remove(".property_1===1")
    expect(list.existence(".property_1===1")).not.toEqual(true)
    expect(list.length).toStrictEqual(1)
});

test('list.remove from head', () => {
    const list = new CircularLinkedList();
    for (let i = 0; i < 3; i++){
        list.append('object_No'+i.toString())
    }
    list.remove("==='object_No0'")
    expect(list.existence("==='object_No0'")).not.toEqual(true)
    expect(list.length).toStrictEqual(2)
});

test('list.remove from mid', () => {
    const list = new CircularLinkedList();
    for (let i = 0; i < 3; i++){
        list.append('object_No'+i.toString())
    }
    list.remove("==='object_No1'")
    expect(list.existence("==='object_No1'")).not.toEqual(true)
    expect(list.length).toStrictEqual(2)
});

test('list.remove from tail', () => {
    const list = new CircularLinkedList();
    for (let i = 0; i < 3; i++){
        list.append('object_No'+i.toString())
    }
    list.remove("==='object_No2'");
    expect(list.existence("==='object_No2'")).not.toEqual(true)
    expect(list.length).toStrictEqual(2)
});

test('create undefined mouse', () => {
    const functionWithError = () => {
        new Mouse("черная", "11", "560", "ACER");
    }
        expect(functionWithError).toThrow("Неверный тип мышки");
});

test('create mouse', () => {
        new Mouse("шариковая", "11", "560", "ACER");
});