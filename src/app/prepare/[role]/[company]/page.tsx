import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import {
  assessmentPaths,
  getAssessmentPath,
  getCompany,
  getRole,
  isCompanyId,
  isRoleId,
} from '@/lib/assessment-paths'
import { getPracticeStages } from '@/lib/practice-curricula'

import PathWorkspace from './path-workspace'

type AssessmentPathPageProps = {
  params: Promise<{ role: string; company: string }>
}

export function generateStaticParams() {
  return assessmentPaths.map((path) => ({
    role: path.roleId,
    company: path.companyId,
  }))
}

export async function generateMetadata({ params }: AssessmentPathPageProps): Promise<Metadata> {
  const { role: roleParam, company: companyParam } = await params

  if (!isRoleId(roleParam) || !isCompanyId(companyParam)) {
    return { title: 'Interview roadmap | Zoheb LMS' }
  }

  const role = getRole(roleParam)
  const company = getCompany(companyParam)

  return {
    title: role && company
      ? `${company.name} ${role.title} roadmap | Zoheb LMS`
      : 'Interview roadmap | Zoheb LMS',
  }
}

export default async function AssessmentPathPage({ params }: AssessmentPathPageProps) {
  const userId = 'zoheb'
  const { role: roleParam, company: companyParam } = await params

  if (!isRoleId(roleParam) || !isCompanyId(companyParam)) {
    notFound()
  }

  const role = getRole(roleParam)
  const company = getCompany(companyParam)
  const path = getAssessmentPath(roleParam, companyParam)

  if (!role || !company || !path) {
    notFound()
  }

  const practiceStages = getPracticeStages(role.id, company.id)

  return (
    <PathWorkspace
      key={`${role.id}:${company.id}`}
      role={role}
      company={company}
      path={path}
      practiceStages={practiceStages}
      storageOwner={userId}
    />
  )
}
