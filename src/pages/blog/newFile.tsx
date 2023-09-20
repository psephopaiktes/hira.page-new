import Base from "@/layouts/Base.astro";
import { tags, blog } from "./index.astro";

<Fragment>
  <Base title="Blog">
    <h2>タグ一覧</h2>
    <ul>
      {tags.map((tag) => (
        <Fragment>
          <li>
            <a href={`/blog/tag/${tag}/`}>{tag}</a>
          </li>
        </Fragment>
      ))}
    </ul>

    <h2>記事リスト</h2>
    <ul>
      {blog.map((blog) => (
        <Fragment>
          <li>
            <a href={`/blog/${blog.slug}/`}>
              <img width={720} height={360} src={blog.data.heroImage} alt="" />
              <h4 class="title">{blog.data.title}</h4>
            </a>
          </li>
        </Fragment>
      ))}
    </ul>
  </Base>
</Fragment>;
