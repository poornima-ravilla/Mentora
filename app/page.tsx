import CompanionCard from '@/components/CompanionCard'
import CompanionsList from '@/components/CompanionsList'
import Cta from '@/components/CTA'
import { recentSessions } from '@/constants'
import { getAllCompanions, getRecentSessions } from '@/lib/actions/companion.actions'
import { getSubjectColor } from '@/lib/utils'

const Page = async() => {
  const companions = await getAllCompanions({limit:3});
  const recentSessionsCompanion = await getRecentSessions(10);
  return (
      <main>
        <div>
          <h1 className='text-2xl underline'>Popular Companions</h1>

          <section className="home-section mb-10">
            {companions.map((companion)=>(
              <CompanionCard
              key={companion.id}
             {... companion}
             color={getSubjectColor(companion.subject)}
            />
            ))}
            
            
            
          </section>
          <section className="home-section">
            <CompanionsList
            title="Recently completed sessions"
            companions={recentSessionsCompanion}
            classNames="w-2/3 max-lg:w-full"
            />
            <Cta/>
          </section>
      </div>
    </main>
  )
}

export default Page