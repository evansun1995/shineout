/**
 * 此文件根据 scripts/components-page.ejs 生成，不要手动修改
 */
import React from 'react'
import navable from 'docs/Navable'
import MarkDown from 'docs/MarkDown'

import locate from 'doc/locate'

import cn from 'doc/pages/components/Select/cn.md'
import en from 'doc/pages/components/Select/en.md'

const source = locate(cn, en)

const examples = [
  {
    title: locate('基本用法', 'Base'),
    component: require('doc/pages/components/Select/example-01-base.js').default,
    rawText: require('!raw-loader!doc/pages/components/Select/example-01-base.js'),
  },
  {
    title: locate('多选 \n multiple 属性为true时，为多选状态，默认为单选', 'Multiple'),
    component: require('doc/pages/components/Select/example-02-multiple.js').default,
    rawText: require('!raw-loader!doc/pages/components/Select/example-02-multiple.js'),
  },
  {
    title: locate('可清空 \n clearable 属性为 true 时，hover 后会显示清空图标，点击后清除所选数据', 'Clearable'),
    component: require('doc/pages/components/Select/example-03-clearable.js').default,
    rawText: require('!raw-loader!doc/pages/components/Select/example-03-clearable.js'),
  },
  {
    title: locate('大小 \n 有三种 size，[&#39;small&#39;, default, &#39;large&#39;]，默认为 default(不要填写)', 'Size'),
    component: require('doc/pages/components/Select/example-04-size.js').default,
    rawText: require('!raw-loader!doc/pages/components/Select/example-04-size.js'),
  },
  {
    title: locate('数据处理 \n 可以借助 Datum.List，处理复杂数据', 'Datum'),
    component: require('doc/pages/components/Select/example-05-datum.js').default,
    rawText: require('!raw-loader!doc/pages/components/Select/example-05-datum.js'),
  },
  {
    title: locate('性能 \n Select 内部实现了懒加载机制优化性能，本例加载了10000条数据。', 'Datum'),
    component: require('doc/pages/components/Select/example-06-bigdata.js').default,
    rawText: require('!raw-loader!doc/pages/components/Select/example-06-bigdata.js'),
  },
  {
    title: locate('禁用', 'Disabled'),
    component: require('doc/pages/components/Select/example-07-disabled.js').default,
    rawText: require('!raw-loader!doc/pages/components/Select/example-07-disabled.js'),
  },
  {
    title: locate('筛选数据 - 前端 \n onFilter 返回函数时，使用这个函数做前端过滤', 'onFilter'),
    component: require('doc/pages/components/Select/example-08-filter.js').default,
    rawText: require('!raw-loader!doc/pages/components/Select/example-08-filter.js'),
  },
  {
    title: locate('筛选数据 - 服务端 \n onFilter 函数不返回结果时，可以自行去服务端筛选数据', 'onFilter'),
    component: require('doc/pages/components/Select/example-09-filter.js').default,
    rawText: require('!raw-loader!doc/pages/components/Select/example-09-filter.js'),
  },
  {
    title: locate('', ''),
    component: require('doc/pages/components/Select/example-10-filter.js').default,
    rawText: require('!raw-loader!doc/pages/components/Select/example-10-filter.js'),
  },
  {
    title: locate('创建条目', 'onCreate'),
    component: require('doc/pages/components/Select/example-11-create.js').default,
    rawText: require('!raw-loader!doc/pages/components/Select/example-11-create.js'),
  },
  {
    title: locate(' \n 和 filter 配合使用', ''),
    component: require('doc/pages/components/Select/example-12-create.js').default,
    rawText: require('!raw-loader!doc/pages/components/Select/example-12-create.js'),
  },
]

const codes = undefined

export default navable(props => (
  <MarkDown {...props} codes={codes} source={source} examples={examples} />
))
