import path from 'path';

function defaultIndexTemplate(filePaths: string[]) {
  // named exportの定義
  const exportEntries = filePaths.map((filePath) => {
    const basename = path.basename(filePath, path.extname(filePath));
    const exportName = /^\d/.test(basename) ? `Svg${basename}` : basename;
    return `
import Icon${exportName} from './${basename}'
export { Icon${exportName} }`;
  });

  // StorybookでIconを一覧表示するため
  const allIconsStory = filePaths.map((filePath) => {
    const basename = path.basename(filePath, path.extname(filePath));
    const exportName = /^\d/.test(basename) ? `Svg${basename}` : basename;
    return `      <Icon${exportName} width={20} height={20} {...args} /><span>${exportName}</span>`;
  });

  // ここから左記が実際ファイルとして出力される部分。上記で処理した文字列を入れる
  return `
import { Story } from '@storybook/react/types-6-0'
import React from 'react'
${exportEntries.join('\n')}
// for storybook
export default {
  title: 'Icons',
  args: {
  },
}
type AllIconsProps = {
}
export const AllIcons: Story<AllIconsProps> = (args) => {
  return (<>
${allIconsStory.join('\n')}</>
  )
}
`;
}

module.exports = defaultIndexTemplate;
