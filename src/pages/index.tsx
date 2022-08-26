import { ComponentScatter } from '@/components/_charts'
import { Meta } from '@/layouts'
import { Main } from '@/templates'

const Index = () => {
  return (
    <Main
      meta={
        <Meta
          title="Lumx Studios - Challenge"
          description="React Challenge for Lumx Studios"
        />
      }
    >
      <div className="flex h-[800px] items-center justify-center pt-24">
        <ComponentScatter />
      </div>
    </Main>
  )
}

export default Index
