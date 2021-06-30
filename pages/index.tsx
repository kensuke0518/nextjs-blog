import Head from 'next/head'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'
import { GetStaticProps } from 'next'
import Post from '../components/Post'
import {sortByDate} from '../utils'

const IndexPage = ({ posts }) => {
    return (
        <div>
            <Head>
                <title>DevBlog</title>
            </Head>

            <div className="posts">
                {
                    posts.map((post, index) => (
                        <Post key={index} post={post} />
                    ))
                }
            </div>
        </div>
    )
}

export async function getStaticProps() {
    //postsディレクトリからファイルを取得
    const files = fs.readdirSync(path.join('posts'))

    //postsからslugとfrontmatter（.mdファイルの先頭に記載された変数等）をmap関数で配列に代入しながら取得
    /**
     * ここは非常に参考になる
     * JSON形式のAPIを書き出すために、map関数で
     */
    const posts = files.map(filename => {
        //各投稿記事へのリンクなどに必要なスラッグをファイル名から取得
        const slug = filename.replace('.md', '')

        //Markdownファイル内を読み込んでFront-matter部分を取得する
        const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8');
        const { data: frontmatter } = matter(markdownWithMeta); //{data:frontmatter}で取得したdataオブジェクトをリネーム
        return {
            slug,
            frontmatter
        }
    })

    return {
        props: {
            posts: posts.sort(sortByDate),
        }
    }
}

export default IndexPage
