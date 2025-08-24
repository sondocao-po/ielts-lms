"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"

export default function SettingsPage() {
  const [emailNotifications, setEmailNotifications] = useState(true)
  const [smsNotifications, setSmsNotifications] = useState(false)
  const [marketingEmails, setMarketingEmails] = useState(false)

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground">Manage your account and system preferences</p>
      </div>

      <Tabs defaultValue="profile">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="center">Center Information</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="system">System</TabsTrigger>
        </TabsList>

        <TabsContent value="profile" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Profile Information</CardTitle>
              <CardDescription>Update your personal information and preferences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                <div className="flex flex-col items-center space-y-2">
                  <Avatar className="h-24 w-24">
                    <AvatarImage src="/placeholder-user.jpg" alt="Profile picture" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <Button variant="outline" size="sm">
                    Change Avatar
                  </Button>
                </div>
                <div className="space-y-4 flex-1">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="first-name">First Name</Label>
                      <Input id="first-name" defaultValue="John" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="last-name">Last Name</Label>
                      <Input id="last-name" defaultValue="Doe" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" defaultValue="john.doe@example.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="title">Job Title</Label>
                    <Input id="title" defaultValue="IELTS Instructor" />
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="bio">Bio</Label>
                  <Textarea
                    id="bio"
                    defaultValue="IELTS instructor with over 10 years of experience. Specialized in teaching writing and speaking skills."
                    rows={4}
                  />
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="timezone">Timezone</Label>
                    <Select defaultValue="utc-8">
                      <SelectTrigger id="timezone">
                        <SelectValue placeholder="Select timezone" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="utc-12">UTC-12:00</SelectItem>
                        <SelectItem value="utc-11">UTC-11:00</SelectItem>
                        <SelectItem value="utc-10">UTC-10:00</SelectItem>
                        <SelectItem value="utc-9">UTC-09:00</SelectItem>
                        <SelectItem value="utc-8">UTC-08:00 (PST)</SelectItem>
                        <SelectItem value="utc-7">UTC-07:00 (MST)</SelectItem>
                        <SelectItem value="utc-6">UTC-06:00 (CST)</SelectItem>
                        <SelectItem value="utc-5">UTC-05:00 (EST)</SelectItem>
                        <SelectItem value="utc-4">UTC-04:00</SelectItem>
                        <SelectItem value="utc-3">UTC-03:00</SelectItem>
                        <SelectItem value="utc-2">UTC-02:00</SelectItem>
                        <SelectItem value="utc-1">UTC-01:00</SelectItem>
                        <SelectItem value="utc">UTC+00:00</SelectItem>
                        <SelectItem value="utc+1">UTC+01:00</SelectItem>
                        <SelectItem value="utc+2">UTC+02:00</SelectItem>
                        <SelectItem value="utc+3">UTC+03:00</SelectItem>
                        <SelectItem value="utc+4">UTC+04:00</SelectItem>
                        <SelectItem value="utc+5">UTC+05:00</SelectItem>
                        <SelectItem value="utc+5:30">UTC+05:30 (IST)</SelectItem>
                        <SelectItem value="utc+6">UTC+06:00</SelectItem>
                        <SelectItem value="utc+7">UTC+07:00</SelectItem>
                        <SelectItem value="utc+8">UTC+08:00</SelectItem>
                        <SelectItem value="utc+9">UTC+09:00 (JST)</SelectItem>
                        <SelectItem value="utc+10">UTC+10:00</SelectItem>
                        <SelectItem value="utc+11">UTC+11:00</SelectItem>
                        <SelectItem value="utc+12">UTC+12:00</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="language">Language</Label>
                    <Select defaultValue="en">
                      <SelectTrigger id="language">
                        <SelectValue placeholder="Select language" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="en">English</SelectItem>
                        <SelectItem value="es">Spanish</SelectItem>
                        <SelectItem value="fr">French</SelectItem>
                        <SelectItem value="de">German</SelectItem>
                        <SelectItem value="zh">Chinese</SelectItem>
                        <SelectItem value="ja">Japanese</SelectItem>
                        <SelectItem value="ko">Korean</SelectItem>
                        <SelectItem value="ar">Arabic</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Cancel</Button>
              <Button>Save Changes</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Password</CardTitle>
              <CardDescription>Update your password</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="current-password">Current Password</Label>
                <Input id="current-password" type="password" />
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="new-password">New Password</Label>
                  <Input id="new-password" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirm-password">Confirm New Password</Label>
                  <Input id="confirm-password" type="password" />
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button>Update Password</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="center" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Center Information</CardTitle>
              <CardDescription>Update your teaching center details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="center-name">Center Name</Label>
                <Input id="center-name" defaultValue="Global IELTS Academy" />
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="center-email">Contact Email</Label>
                  <Input id="center-email" type="email" defaultValue="info@globalieltsacademy.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="center-phone">Contact Phone</Label>
                  <Input id="center-phone" defaultValue="+1 (555) 123-4567" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="center-address">Address</Label>
                <Textarea id="center-address" defaultValue="123 Education Street, Suite 456, Academic City, AC 12345" />
              </div>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="space-y-2">
                  <Label htmlFor="center-city">City</Label>
                  <Input id="center-city" defaultValue="Academic City" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="center-state">State/Province</Label>
                  <Input id="center-state" defaultValue="Education State" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="center-zip">Postal/Zip Code</Label>
                  <Input id="center-zip" defaultValue="12345" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="center-country">Country</Label>
                <Select defaultValue="us">
                  <SelectTrigger id="center-country">
                    <SelectValue placeholder="Select country" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="us">United States</SelectItem>
                    <SelectItem value="ca">Canada</SelectItem>
                    <SelectItem value="uk">United Kingdom</SelectItem>
                    <SelectItem value="au">Australia</SelectItem>
                    <SelectItem value="nz">New Zealand</SelectItem>
                    <SelectItem value="in">India</SelectItem>
                    <SelectItem value="sg">Singapore</SelectItem>
                    <SelectItem value="ae">United Arab Emirates</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="center-website">Website</Label>
                <Input id="center-website" defaultValue="https://www.globalieltsacademy.com" />
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Cancel</Button>
              <Button>Save Changes</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Branding</CardTitle>
              <CardDescription>Customize your center's branding</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label>Logo</Label>
                  <div className="flex items-center gap-4">
                    <div className="h-20 w-20 rounded-md border flex items-center justify-center bg-muted">
                      <span className="text-muted-foreground">Logo</span>
                    </div>
                    <Button variant="outline">Upload Logo</Button>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Favicon</Label>
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-md border flex items-center justify-center bg-muted">
                      <span className="text-muted-foreground text-xs">Icon</span>
                    </div>
                    <Button variant="outline">Upload Favicon</Button>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="primary-color">Primary Color</Label>
                <div className="flex items-center gap-2">
                  <Input id="primary-color" defaultValue="#4f46e5" />
                  <div className="h-10 w-10 rounded-md bg-primary" />
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save Branding</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Notification Preferences</CardTitle>
              <CardDescription>Manage how you receive notifications</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Email Notifications</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="email-notifications">Email Notifications</Label>
                      <p className="text-sm text-muted-foreground">Receive notifications via email</p>
                    </div>
                    <Switch
                      id="email-notifications"
                      checked={emailNotifications}
                      onCheckedChange={setEmailNotifications}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="student-updates">Student Updates</Label>
                      <p className="text-sm text-muted-foreground">
                        Get notified about student progress and activities
                      </p>
                    </div>
                    <Switch id="student-updates" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="class-reminders">Class Reminders</Label>
                      <p className="text-sm text-muted-foreground">Receive reminders about upcoming classes</p>
                    </div>
                    <Switch id="class-reminders" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="system-updates">System Updates</Label>
                      <p className="text-sm text-muted-foreground">Get notified about system updates and maintenance</p>
                    </div>
                    <Switch id="system-updates" defaultChecked />
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-lg font-medium">SMS Notifications</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="sms-notifications">SMS Notifications</Label>
                      <p className="text-sm text-muted-foreground">Receive notifications via SMS</p>
                    </div>
                    <Switch id="sms-notifications" checked={smsNotifications} onCheckedChange={setSmsNotifications} />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="sms-phone">Phone Number</Label>
                      <p className="text-sm text-muted-foreground">Phone number for SMS notifications</p>
                    </div>
                    <Input
                      id="sms-phone"
                      className="w-[200px]"
                      defaultValue="+1 (555) 123-4567"
                      disabled={!smsNotifications}
                    />
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Marketing Communications</h3>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="marketing-emails">Marketing Emails</Label>
                    <p className="text-sm text-muted-foreground">Receive updates about new features and promotions</p>
                  </div>
                  <Switch id="marketing-emails" checked={marketingEmails} onCheckedChange={setMarketingEmails} />
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save Preferences</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="system" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>System Settings</CardTitle>
              <CardDescription>Configure system-wide settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">General Settings</h3>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="date-format">Date Format</Label>
                    <Select defaultValue="mm-dd-yyyy">
                      <SelectTrigger id="date-format">
                        <SelectValue placeholder="Select date format" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="mm-dd-yyyy">MM-DD-YYYY</SelectItem>
                        <SelectItem value="dd-mm-yyyy">DD-MM-YYYY</SelectItem>
                        <SelectItem value="yyyy-mm-dd">YYYY-MM-DD</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="time-format">Time Format</Label>
                    <Select defaultValue="12h">
                      <SelectTrigger id="time-format">
                        <SelectValue placeholder="Select time format" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="12h">12-hour (AM/PM)</SelectItem>
                        <SelectItem value="24h">24-hour</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="default-language">Default Language</Label>
                  <Select defaultValue="en">
                    <SelectTrigger id="default-language">
                      <SelectValue placeholder="Select language" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="en">English</SelectItem>
                      <SelectItem value="es">Spanish</SelectItem>
                      <SelectItem value="fr">French</SelectItem>
                      <SelectItem value="de">German</SelectItem>
                      <SelectItem value="zh">Chinese</SelectItem>
                      <SelectItem value="ja">Japanese</SelectItem>
                      <SelectItem value="ko">Korean</SelectItem>
                      <SelectItem value="ar">Arabic</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Security Settings</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="two-factor">Two-Factor Authentication</Label>
                      <p className="text-sm text-muted-foreground">Require 2FA for all admin accounts</p>
                    </div>
                    <Switch id="two-factor" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="session-timeout">Session Timeout</Label>
                      <p className="text-sm text-muted-foreground">Automatically log out inactive users</p>
                    </div>
                    <Select defaultValue="30">
                      <SelectTrigger id="session-timeout" className="w-[120px]">
                        <SelectValue placeholder="Select time" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="15">15 minutes</SelectItem>
                        <SelectItem value="30">30 minutes</SelectItem>
                        <SelectItem value="60">1 hour</SelectItem>
                        <SelectItem value="120">2 hours</SelectItem>
                        <SelectItem value="240">4 hours</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Backup & Data</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Automatic Backups</Label>
                      <p className="text-sm text-muted-foreground">Schedule regular system backups</p>
                    </div>
                    <Select defaultValue="daily">
                      <SelectTrigger className="w-[120px]">
                        <SelectValue placeholder="Select frequency" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="daily">Daily</SelectItem>
                        <SelectItem value="weekly">Weekly</SelectItem>
                        <SelectItem value="monthly">Monthly</SelectItem>
                        <SelectItem value="off">Off</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Data Retention</Label>
                      <p className="text-sm text-muted-foreground">How long to keep inactive student data</p>
                    </div>
                    <Select defaultValue="2years">
                      <SelectTrigger className="w-[120px]">
                        <SelectValue placeholder="Select period" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="6months">6 months</SelectItem>
                        <SelectItem value="1year">1 year</SelectItem>
                        <SelectItem value="2years">2 years</SelectItem>
                        <SelectItem value="5years">5 years</SelectItem>
                        <SelectItem value="forever">Forever</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="pt-2">
                    <Button variant="outline">Export All Data</Button>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Reset to Defaults</Button>
              <Button>Save Settings</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Account Management</CardTitle>
              <CardDescription>Manage your account settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Subscription Plan</h4>
                    <p className="text-sm text-muted-foreground">Your current subscription plan</p>
                  </div>
                  <Badge>Professional</Badge>
                </div>
                <div className="text-sm">
                  <p>Next billing date: June 15, 2023</p>
                  <div className="flex gap-2 mt-2">
                    <Button variant="outline" size="sm">
                      Change Plan
                    </Button>
                    <Button variant="outline" size="sm">
                      Billing History
                    </Button>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-2">
                <h4 className="font-medium">Danger Zone</h4>
                <p className="text-sm text-muted-foreground">Irreversible and destructive actions</p>
                <div className="flex flex-col gap-2 pt-2">
                  <Button variant="outline" className="border-destructive text-destructive hover:bg-destructive/10">
                    Delete All Data
                  </Button>
                  <Button variant="outline" className="border-destructive text-destructive hover:bg-destructive/10">
                    Close Account
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
