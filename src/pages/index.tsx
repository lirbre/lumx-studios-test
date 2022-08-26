import { useTheme } from 'next-themes'

import { ComponentScatter } from '@/components/_charts'
import { Meta } from '@/layouts'
import { Main } from '@/templates'

const Index = () => {
  const { resolvedTheme, setTheme } = useTheme()

  return (
    <Main
      meta={
        <Meta
          title="Evil Boilerplate"
          description="The perfect boilerplate for your project."
        />
      }
    >
      <div
        className="pt-24"
        onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      >
        <ComponentScatter />
      </div>
    </Main>
  )
}

export default Index
