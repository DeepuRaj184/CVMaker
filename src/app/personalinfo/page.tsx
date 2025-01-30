import { Header } from "../components/header"
import { PersonalInfoForm } from "../components/personalinfo"
export default function PersonalInfo() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container px-4 py-8">
        <PersonalInfoForm />
      </main>
    </div>
  )
}

