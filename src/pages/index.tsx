import { Dashboard } from '@/components'
import { ComponentScatter } from '@/components/_charts'
import { LinesDashboard } from '@/components/linesdashboard'
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
      <div className="mx-auto flex max-w-[1800px] flex-col items-center justify-center pt-36">
        <Dashboard />
        <ComponentScatter />
        <LinesDashboard />
      </div>
    </Main>
  )
}

export default Index
