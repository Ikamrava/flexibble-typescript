import { g, auth, config } from '@grafbase/sdk'

const User = g.model("User",{
  name: g.string().length({min: 2,max:20}),
  email: g.string().unique(),
  password: g.string().length({min: 6,max:20}),
  avatarUrl: g.url(),
  description: g.string().optional(),
  githubUrl: g.url().optional(),
  linkedinUrl: g.url().optional(),
  projects: g.relation(()=>Project).list().optional()
})

const Project = g.model("Project",{
  title:g.string(),
  description: g.string(),
  Image: g.url(),
  liveSiteUrl: g.url(),
  gitHubUrl: g.url(),
  category: g.string().search(),
  createdBy : g.relation(User)
})

export default config({
  schema: g

})
