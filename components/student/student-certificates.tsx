"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Download, ExternalLink } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"

interface StudentCertificatesProps {
  isEditing: boolean
}

export function StudentCertificates({ isEditing }: StudentCertificatesProps) {
  const [certificates, setCertificates] = useState(defaultCertificates)
  const [newCertificate, setNewCertificate] = useState({
    name: "",
    issuer: "",
    date: "",
    credentialId: "",
  })

  const handleAddCertificate = () => {
    if (newCertificate.name && newCertificate.issuer && newCertificate.date) {
      setCertificates([
        ...certificates,
        {
          ...newCertificate,
          id: `cert-${certificates.length + 1}`,
          verified: false,
        },
      ])
      setNewCertificate({
        name: "",
        issuer: "",
        date: "",
        credentialId: "",
      })
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Certificates & Achievements</CardTitle>
        <CardDescription>Your earned certificates and qualifications</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {certificates.map((certificate) => (
          <div key={certificate.id} className="border rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <Award className="h-5 w-5 text-primary mr-2" />
                <h3 className="font-medium">{certificate.name}</h3>
              </div>
              {certificate.verified && <Badge>Verified</Badge>}
            </div>
            <div className="text-sm text-muted-foreground mb-2">
              Issued by {certificate.issuer} • {certificate.date}
            </div>
            {certificate.credentialId && (
              <div className="text-sm mb-4">
                Credential ID: <span className="font-mono">{certificate.credentialId}</span>
              </div>
            )}
            <div className="flex gap-2">
              <Button size="sm" variant="outline" className="flex items-center">
                <Download className="h-4 w-4 mr-1" />
                Download
              </Button>
              <Button size="sm" variant="outline" className="flex items-center">
                <ExternalLink className="h-4 w-4 mr-1" />
                Verify
              </Button>
            </div>
          </div>
        ))}

        {isEditing && (
          <div className="border rounded-lg p-4 border-dashed">
            <h3 className="font-medium mb-4">Add New Certificate</h3>
            <div className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="cert-name">Certificate Name</Label>
                  <Input
                    id="cert-name"
                    value={newCertificate.name}
                    onChange={(e) => setNewCertificate({ ...newCertificate, name: e.target.value })}
                    placeholder="e.g., IELTS Preparation Course"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cert-issuer">Issuing Organization</Label>
                  <Input
                    id="cert-issuer"
                    value={newCertificate.issuer}
                    onChange={(e) => setNewCertificate({ ...newCertificate, issuer: e.target.value })}
                    placeholder="e.g., British Council"
                  />
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="cert-date">Issue Date</Label>
                  <Input
                    id="cert-date"
                    type="date"
                    value={newCertificate.date}
                    onChange={(e) => setNewCertificate({ ...newCertificate, date: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cert-id">Credential ID (Optional)</Label>
                  <Input
                    id="cert-id"
                    value={newCertificate.credentialId}
                    onChange={(e) => setNewCertificate({ ...newCertificate, credentialId: e.target.value })}
                    placeholder="e.g., ABC123XYZ"
                  />
                </div>
              </div>
              <Button onClick={handleAddCertificate}>Add Certificate</Button>
            </div>
          </div>
        )}

        {certificates.length === 0 && !isEditing && (
          <div className="text-center py-6 text-muted-foreground">
            <Award className="h-12 w-12 mx-auto mb-3 opacity-20" />
            <p>You haven't added any certificates yet.</p>
          </div>
        )}
      </CardContent>
      {!isEditing && certificates.length > 0 && (
        <CardFooter>
          <Button variant="outline" className="w-full">
            View All Certificates
          </Button>
        </CardFooter>
      )}
    </Card>
  )
}

const defaultCertificates = [
  {
    id: "cert-1",
    name: "IELTS Preparation Advanced Certificate",
    issuer: "Global IELTS Academy",
    date: "May 15, 2023",
    credentialId: "GIA-IELTS-2023-0456",
    verified: true,
  },
  {
    id: "cert-2",
    name: "Academic Writing Excellence",
    issuer: "British Council",
    date: "March 10, 2023",
    credentialId: "BC-AWE-2023-1234",
    verified: true,
  },
]
