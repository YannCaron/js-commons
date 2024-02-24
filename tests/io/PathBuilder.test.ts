import PathBuilder from "../../src/io/PathBuilder"

test('Path builder basic', () => {

    const pb = new PathBuilder()

    expect(pb.toString())
        .toBe('')

    pb.append('main')

    expect(pb.toString())
        .toBe('/main')

    pb.append('folder')

    expect(pb.toString())
        .toBe('/main/folder')

    pb.clear()

    expect(pb.toString())
        .toBe('')

})

test('Path builder constructor', () => {

    const pb = PathBuilder.parse('/main/folder')

    expect(pb.toString())
        .toBe('/main/folder')

    pb.append('drive')

    expect(pb.toString())
        .toBe('/main/folder/drive')

})