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