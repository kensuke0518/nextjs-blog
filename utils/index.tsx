export const sortByDate = (a, b) => { //このa,bは何？
    /**
     * この唐突に出てきたa,bはsort()関数のa,bのようだ
     * https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#description
     * ちょっと難しい
     */
    const bb: any = new Date(b.frontmatter.date)
    const aa: any = new Date(a.frontmatter.date)
    return bb - aa;
}
