import { DoubleLinkedList } from '../DoublyLinkedList'

/**
 * Requirements:
 * 1. Can add new elements
 * 2. Can insert elements at any (valid) position
 * 3. Can remove elements at any (valid) position
 * 4. Can get index of a given element
 * 5. Can determine if a given element is present in the list
 * 6. Can check list size (empty and size)
 * 7. Can convert list to string, array
 * 8. Can iterate over the list
 * 9. Can get head and tail
 */
describe('DoubleLinkedList', () => {
  // Tests requirement: 1
  it('Check append', () => {
    const list = new DoubleLinkedList()

    list.append(1)
    expect(list.getHead().element).toEqual(1)

    list.append(2)
    expect(list.getTail().element).toEqual(2)
  })

  // Tests requirement: 2
  it('Check insert', () => {
    const list = new DoubleLinkedList()

    list.insert(0, 1)
    expect(list.getHead().element).toEqual(1)

    list.insert(1, 20)
    expect(list.getTail().element).toEqual(20)
  })

  // Tests requirement: 3
  it('Check removeAt', () => {
    const list = new DoubleLinkedList()

    list.insert(0, 10)
    list.insert(1, 40)
    list.insert(2, 30)

    list.removeAt(0)
    expect(list.getHead().element).toEqual(40)

    list.removeAt(1)
    expect(list.getTail().element).toEqual(40)
  })

  // Tests requirement: 3
  it('Check delete', () => {
    const list = new DoubleLinkedList()

    list.insert(0, 10)
    list.insert(1, 40)

    list.delete(10)
    expect(list.getHead().element).toEqual(40)
  })

  // Tests requirement: 3
  it('Check deleteTail', () => {
    const list = new DoubleLinkedList()

    list.insert(0, 10)
    list.insert(1, 40)

    list.deleteTail()
    expect(list.getTail().element).toEqual(10)
  })

  // Tests requirement: 7
  it('Check toString', () => {
    const list = new DoubleLinkedList()

    list.insert(0, 20)
    expect(list.toString()).toEqual('20')
  })

  // Tests requirement: 6
  it('Check isEmpty', () => {
    const list = new DoubleLinkedList()

    expect(list.isEmpty()).toEqual(true)

    list.insert(0, 'Hello')
    expect(list.isEmpty()).toEqual(false)
  })

  // Tests requirement: 6
  it('Check size', () => {
    const list = new DoubleLinkedList()
    expect(list.size()).toBe(0)

    list.append(10)
    expect(list.size()).toBe(1)

    list.removeAt(1)
    expect(list.size()).toBe(1)
  })

  // Tests requirement: 7
  it('Check toArray', () => {
    const list = new DoubleLinkedList()
    list.append(1)
    list.append(2)

    const listArray = list.toArray()
    expect(listArray).toEqual([1, 2])
  })

  // Tests requirement: 9
  it('Check getHead', () => {
    const list = new DoubleLinkedList()
    expect(list.getHead()).toEqual(null)

    list.append(1)
    list.append(2)
    expect(list.getHead()).toBeInstanceOf(Object)
  })

  // Tests requirement: 8
  it('Check Iterator', () => {
    const list = new DoubleLinkedList()

    let iterate = list.iterator()
    expect(iterate).toBe(-1)

    const arr = [10, 20, 5]
    list.append(arr[0])
    list.append(arr[1])
    list.append(arr[2])
    iterate = list.iterator()

    for (let i = 0; i < arr.length; i++) {
      expect(iterate.next().value).toBe(arr[i])
    }
    expect(iterate.next().value).toBe(undefined)

    iterate = list.iterator()
    let count = 0
    for (const item of iterate) {
      expect(item).toBe(arr[count])
      count++
    }
  })

  // Tests requirement: 2
  it('Check insert as head when head is not null', () => {
    const list = new DoubleLinkedList()

    list.append(1)
    list.insert(0, 2)
    expect(list.getHead().element).toBe(2)
    expect(list.getTail().element).toBe(1)
  })

  // Tests requirement: 2
  it('Check insert when inserting in the middle of the list', () => {
    const list = new DoubleLinkedList()

    list.append(1)
    list.append(3)
    list.append(4)
    list.insert(1, 2)

    const iterate = list.iterator()

    expect(iterate.next().value).toBe(1)
    expect(iterate.next().value).toBe(2)
    expect(iterate.next().value).toBe(3)
    expect(iterate.next().value).toBe(4)
  })

  // Tests requirement: 3
  it('Check removeAt when removing in the middle of the list', () => {
    const list = new DoubleLinkedList()

    list.append(1)
    list.append(2)
    list.append(2)
    list.append(3)
    list.removeAt(1)

    const iterate = list.iterator()

    expect(iterate.next().value).toBe(1)
    expect(iterate.next().value).toBe(2)
    expect(iterate.next().value).toBe(3)
  })
})
