import test from 'node:test'
import assert from 'node:assert/strict'
import PathBuilder from "../../src/io/PathBuilder.ts"

test('Path builder basic', () => {

    const pb = new PathBuilder()

    assert.strictEqual(pb.toString(), '')

    pb.append('main')

    assert.strictEqual(pb.toString(), '/main')

    pb.append('folder')

    assert.strictEqual(pb.toString(), '/main/folder')

    pb.clear()

    assert.strictEqual(pb.toString(), '')

})

test('Path builder constructor', () => {

    const pb = PathBuilder.parse('/main/folder')

    assert.strictEqual(pb.toString(), '/main/folder')

    pb.append('drive')

    assert.strictEqual(pb.toString(), '/main/folder/drive')

})

test('Path builder consistency after clear', () => {

    const pb1 = new PathBuilder()
    pb1.append('main')

    const pb2 = new PathBuilder()
    pb2.clear()
    pb2.append('main')

    assert.strictEqual(pb2.toString(), pb1.toString())

})
