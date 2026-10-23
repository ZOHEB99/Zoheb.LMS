import type { Metadata } from 'next'

import LabWorkspace from './lab-workspace'

export const metadata: Metadata = {
  title: 'DevOps Cloud Lab | Zoheb LMS',
  description: 'Hands-on virtual lab: build, deploy, scale, secure, and run one app on Azure, AWS, and Google Cloud.',
}

export default async function DevOpsLabPage() {
  const userId = 'zoheb'
  return <LabWorkspace storageOwner={userId} />
}
