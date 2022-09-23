---
title: Type README
date: 2022-09-21 18:02:00
permalink: /type-readme/
---
<img src="./hexo-theme-type-logo.png" alt="logo" width="72" height="72" align="right" />

- [Hexo Theme Type](#hexo-theme-type)
  - [🔨 安装使用](#-安装使用)
    - [使用 npm 安装（推荐）](#使用-npm-安装推荐)
    - [使用 git 安装](#使用-git-安装)
  - [📖 文档](#-文档)
  - [💡 快速指南](#-快速指南)
    - [主题设定](#主题设定)
    - [独立页面](#独立页面)
      - [创建文章样式的独立页面](#创建文章样式的独立页面)
      - [创建照片墙页面](#创建照片墙页面)
      - [创建关于页面 β](#创建关于页面-β)
      - [创建其他样式页面](#创建其他样式页面)
  - [🗒 许可证](#-许可证)
    - [HEXO 相关](#hexo-相关)
    - [评论系统](#评论系统)
    - [其他](#其他)
  - [✨ Star 历史趋势](#-star-历史趋势)

# Hexo Theme Type

<p style="text-align:center;" align="center">
一个漂亮、简洁的 HEXO 主题
</p>

<p style="text-align:center;" align="center">
<img src="https://img.shields.io/github/downloads/aiokr/hexo-theme-type/total?color=orange&style=for-the-badge&label=Download&logo=github" alt="Github Download Count"/>
<img src="https://img.shields.io/github/v/release/aiokr/hexo-theme-type?style=for-the-badge&label=Release&logo=github" alt="Github Release"/>
<img src="https://img.shields.io/github/languages/code-size/aiokr/hexo-theme-type?color=71afdd&label=Code%20Size&logo=github&style=for-the-badge" alt="Github Code Size"/>
<img src="https://img.shields.io/github/workflow/status/aiokr/hexo-theme-type/Hexo-Theme-Type%20auto%20test/auto-package?label=test&logo=github&style=for-the-badge" alt="Test"/>
<a href="https://qun.qq.com/qqweb/qunpro/share?_wv=3&_wwv=128&appChannel=share&inviteCode=14OQfh&businessType=9&from=246610&biz=ka#/pc"><img src="https://img.shields.io/badge/QQ%20Channel-TYPEforHEXO-71afdd?&style=for-the-badge">
</p></a>

![Snipaste_2022-04-13_13-40-24](https://imgur.lzmun.com/picgo/after2022/Snipaste_2022-04-13_13-40-24.png_itp)

![Snipaste_2022-04-13_13-40-13](https://imgur.lzmun.com/picgo/after2022/Snipaste_2022-04-13_13-40-13.png_itp)

[中文文档](https://tripper.press/type-readme/#💡-快速指南)  [效果预览](https://tripper.press/)  [实时预览](https://photup.github.io/type-live-preivew/)

本仓库经由 Github Action 自动打包生成，实时生成的文件在 [auto-package 分支](https://github.com/aiokr/hexo-theme-type/tree/auto-package)，定期会合并到主分支。

- 提出 Issue 请到 [Issues · aiokr/Tripper-Press](https://github.com/aiokr/Tripper-Press/issues)
- 了解最新进展请到 [[持续更新] Hexo-Theme-Type 最新进展 · Discussion #23 · aiokr/Tripper-Press](https://github.com/aiokr/Tripper-Press/discussions/23)
- 参与讨论请到 [Discussions · aiokr/Tripper-Press](https://github.com/aiokr/Tripper-Press/discussions/categories/general) 或 [QQ 频道](https://qun.qq.com/qqweb/qunpro/share?_wv=3&_wwv=128&appChannel=share&inviteCode=14OQfh&businessType=9&from=246610&biz=ka#/pc)

## 🔨 安装使用

本主题支持 npm 和 git 两种安装方式，你也可以下载 release 版本手动安装。
当前主题仍在开发中，部分功能还没有完善！

### 使用 npm 安装（推荐）

进入 Hexo 根目录，依次执行以下命令。

```bash
npm install hexo-theme-type --save
npm install
cp -v ./node_modules/hexo-theme-type/_config_template.yml ./_config.type.yml
```

随后，修改站点配置文件[^1]

```yaml
theme: type
```

### 使用 git 安装

进入 Hexo 根目录，依次执行以下命令。

```bash
git clone https://github.com/aiokr/hexo-theme-type.git themes/type --depth=1
npm install
```

随后，修改站点配置文件[^1]

```yaml
theme: type
```

## 📖 文档

本项目的文档正在逐步完善中，详情请阅读 [GitHub · Where software is built](https://github.com/aiokr/hexo-theme-type/wiki)

## 💡 快速指南

### 主题设定

[主题设定](https://tripper.press/type/theme_settings.html)

### 独立页面

本主题支持以下独立页面：
1. 文章样式：你可以创建一个外观和文章一样的独立页面。
2. 照片墙页面：一个照片墙页面。
3. 关于页面 β：一个独特的“关于我”页面，目前尚在测试阶段，随时可能发生变化。
4. 其他样式页面

#### 创建文章样式的独立页面

[效果预览](https://tripper.press/about-archieve/)

在 `source` 文件夹中添加一个文件夹，并在其中创建 'index.md' 文件，填入以下信息

```yaml
---
title: {{ 页面标题 }}
date: {{ 创建日期 }}
---
```

也可以执行以下代码：

```yaml
hexo new page '页面标题'
```

#### 创建照片墙页面

[效果预览](https://tripper.press/gallery/)

在 `source` 文件夹中添加一个文件夹，并在其中创建 `index.md` 文件，填入以下信息

```yaml
---
title: {{ 页面标题 }}
layout: gallery2
---
```

并在 `source/_data` 文件夹中创建 `gallery.yml`，按以下模板填写内容：

```yaml
'{{项目标题}}':
  date: {{拍摄日期：格式：YYYY-MM-DD，此项目可移除}}
  cover: '{{项目封面，此项目可移除}}' 
  img:
    - '{{图片链接1}}'
    - '{{图片链接2}}'
```

#### 创建关于页面 β

[效果预览](https://tripper.press/about/)

在 `source` 文件夹中添加一个文件夹，并在其中创建 `index.md` 文件，填入以下信息

```yaml
---
title: {{ 页面标题 }}
layout: about_page
---
```

修改 `themes/hexo-themes-type/layout/about_page.ejs` 的内容

#### 创建其他样式页面

[效果预览](https://tripper.press/weatherwidget.html)

在 `source` 文件夹中添加一个文件，并在开头填入以下内容

```
---
layout: html
---
```

随后你可以在该文件夹中填入任意 HTML 代码

## 🗒 许可证

hexo-theme-type 还使用/依赖了这些开源项目

### HEXO 相关

**HEXO**  
[hexojs/hexo: A fast, simple & powerful blog framework, powered by Node.js.](https://github.com/hexojs/hexo)  
**License**: MIT

**hexo-renderer-ejs**  
[hexojs/hexo-renderer-ejs: EJS renderer for Hexo](https://github.com/hexojs/hexo-renderer-ejs)  
**License**: MIT

**hexo-renderer-marked**  
[hexojs/hexo-renderer-marked: Markdown renderer for Hexo](https://github.com/hexojs/hexo-renderer-marked)  
**License**: MIT

### 评论系统

**DisqusJS**  
[SukkaW/DisqusJS: Render Disqus comments in Mainland China using Disqus API](https://github.com/SukkaW/DisqusJS)  
**License**: MIT

**Valine**  
[xCss/Valine: A fast, simple & powerful comment system.](https://github.com/xCss/Valine)  
**License**: GPL-2.0

**Waline**  
[walinejs/waline: A Simple, Safe Comment System inspired by Valine | 一款基于 Valine 衍生的简洁、安全的评论系统](https://github.com/walinejs/waline)  
**License**: GPL-2.0

**Gitment**  
[imsun/gitment: A comment system based on GitHub Issues.](https://github.com/imsun/gitment)  
**License**: MIT

### 其他

**MDUI**  
[zdhxiong/mdui: MDUI 是一个基于 Material Design 的前端框架。](https://github.com/zdhxiong/mdui)  
**License**: MIT

**霞鹜文楷**  
[lxgw/LxgwBright: A merged font of Ysabeau Office and LXGW WenKai.](https://github.com/lxgw/LxgwBright)  
**License**: SIL Open Font License 1.1

**Josefin Sans Font Project**  
[googlefonts/josefinsans: Google Improvement Project](https://github.com/googlefonts/josefinsans)  
**License**: SIL Open Font License 1.1

## ✨ Star 历史趋势

![Star](https://starchart.cc/aiokr/hexo-theme-type.svg)

---

[^1]: 站点配置文件即 Hexo 根目录的 `_config.yml` 文件