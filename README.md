# nuera-ui

創紀後台設計系統的程式版：Figma「創紀後台」的顏色、圓角、字體（Noto Sans TC）、文字階層，加上 20 組 shadcn 元件。

它是**零件盒**，不是產品。各產品用 shadcn 的方式把元件**複製**進自己的 repo，複製過去就歸該產品所有。

## 開發

```bash
pnpm install
pnpm dev          # 預覽站 http://localhost:5173
pnpm build        # 檢查型別並打包預覽站
```

- 元件在 `src/components/ui/`
- 顏色、字體、文字階層在 `src/index.css`（值對應 Figma 的變數集合）
- 預覽站在 `src/App.tsx`，新增元件請一併加進去

## 改一個元件、發佈給大家

1. 開分支，改 `src/components/ui/xxx.tsx`，在預覽站看過。
2. 新元件要在 `registry.json` 加一筆（`name`、`dependencies`、`files`）。
3. 重新產生 registry 檔，**這步不能省**，別人抓的是它：
   ```bash
   pnpm exec shadcn build      # 產生 public/r/*.json
   ```
4. `git add -A`，commit，開 Pull Request，合併進 `main`。

合併後 registry 網址立刻是新版本：
`https://raw.githubusercontent.com/nuera-tec/nuera-admin-ui/main/public/r/{name}.json`

## 在你的產品裡使用或更新

一次性設定，在產品的 `components.json` 加：

```json
"registries": {
  "@nuera": "https://raw.githubusercontent.com/nuera-tec/nuera-admin-ui/main/public/r/{name}.json"
}
```

之後：

```bash
npx shadcn add @nuera/all              # 第一次：主題 + 全部元件
npx shadcn add @nuera/button --diff    # 先看差異
npx shadcn add @nuera/button -o        # 確定要更新才覆蓋
npx shadcn add @nuera/nuera-theme -o   # 顏色字體變了時
```

## 規矩

- **改過的元件不要重拉。** 產品端客製過的檔案，在檔頭寫一行 `// customized: 原因`，更新時跳過它；共同需要的改動請回到這裡改，不要各自長。
- **沒有自動同步。** 產品自己決定什麼時候更新、更新哪幾個；看 `main` 的 commit 紀錄知道改了什麼。
- **這裡只放 UI。** 沒有商業邏輯、沒有 API、沒有任何機密，所以是 public repo。

## 部署（選用）

`docker compose up --build` 會把預覽站和 `/r/` registry 一起用 nginx 端出來，有自己的網域時可以把上面的 registry 網址換成它。
