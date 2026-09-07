import { useEffect, useState } from 'react'
import { Copy, Ellipsis, Eye, Moon, Plus, Search, Sun } from 'lucide-react'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Field, FieldDescription, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Toaster } from '@/components/ui/sonner'
import { Switch } from '@/components/ui/switch'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { toast } from 'sonner'

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="space-y-3">
      <h2 className="text-h3 text-muted-foreground">{title}</h2>
      <div className="flex flex-wrap items-center gap-3">{children}</div>
    </section>
  )
}

const members = [
  { name: 'Alex Lin', account: 'alex.lin', group: '系統管理員', status: '啟用', last: '今天 09:42' },
  { name: 'Mia Chen', account: 'mia.chen', group: '管理員', status: '啟用', last: '昨天 18:10' },
  { name: 'Ken Huang', account: 'ken.huang', group: '財務', status: '待啟用', last: '尚未登入' },
  { name: 'Rita Wu', account: 'rita.wu', group: '客服', status: '停用', last: '2026/07/01' },
]

const statusVariant = { 啟用: 'success', 待啟用: 'warning', 停用: 'muted' } as const

export default function App() {
  const [dark, setDark] = useState(false)
  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
  }, [dark])

  return (
    <main className="mx-auto max-w-5xl space-y-10 p-8">
      <header className="flex items-center justify-between">
        <div>
          <h1 className="text-h1">nuera-ui</h1>
          <p className="text-body text-muted-foreground">
            創紀後台設計系統的程式版。元件用 shadcn registry 複製到各產品，複製後歸各產品所有。
          </p>
        </div>
        <Button variant="outline" size="icon" aria-label="切換深色" onClick={() => setDark((d) => !d)}>
          {dark ? <Sun /> : <Moon />}
        </Button>
      </header>

      <Section title="Text">
        <div className="space-y-1">
          <p className="text-display">Display 30／36</p>
          <p className="text-h1">H1 24／32</p>
          <p className="text-h2">H2 20／28</p>
          <p className="text-h3">H3 16／24</p>
          <p className="text-body">Body 14／20</p>
          <p className="text-small text-muted-foreground">Small 12／16</p>
          <p className="text-xs-tight text-muted-foreground">XS 11／14</p>
        </div>
      </Section>

      <Section title="Button">
        <Button>
          <Plus /> 新增人員
        </Button>
        <Button variant="secondary">次要</Button>
        <Button variant="outline">外框</Button>
        <Button variant="ghost">幽靈</Button>
        <Button variant="destructive">刪除帳號</Button>
        <Button variant="link">連結</Button>
        <Button size="sm">小</Button>
        <Button size="lg">大</Button>
        <Button disabled>停用</Button>
        <Button variant="outline" size="icon" aria-label="更多">
          <Ellipsis />
        </Button>
        <Button variant="ghost" size="icon-sm" aria-label="複製">
          <Copy />
        </Button>
      </Section>

      <Section title="Badge">
        <Badge>預設</Badge>
        <Badge variant="soft">系統管理員</Badge>
        <Badge variant="success">啟用</Badge>
        <Badge variant="warning">待啟用</Badge>
        <Badge variant="muted">停用</Badge>
        <Badge variant="destructive">錯誤</Badge>
        <Badge variant="brand">Brand</Badge>
        <Badge variant="outline">外框</Badge>
        <Badge variant="secondary">次要</Badge>
      </Section>

      <Section title="Avatar">
        <Avatar>
          <AvatarFallback>AL</AvatarFallback>
        </Avatar>
        <Avatar className="size-10">
          <AvatarFallback>MC</AvatarFallback>
        </Avatar>
      </Section>

      <Section title="Input / Select / Field">
        <div className="relative w-72">
          <Search className="pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input className="pl-8" placeholder="搜尋姓名、帳號、Email" />
        </div>
        <Select defaultValue="all">
          <SelectTrigger className="w-40">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">狀態：全部</SelectItem>
            <SelectItem value="active">啟用</SelectItem>
            <SelectItem value="pending">待啟用</SelectItem>
            <SelectItem value="disabled">停用</SelectItem>
          </SelectContent>
        </Select>
        <Field className="w-72">
          <FieldLabel htmlFor="account">帳號 *</FieldLabel>
          <Input id="account" placeholder="例如：chen.xiaoming" />
          <FieldDescription>登入用；英數與「.」，建立後不能改</FieldDescription>
        </Field>
        <Field className="w-72" data-invalid>
          <FieldLabel htmlFor="account2">帳號 *</FieldLabel>
          <Input id="account2" defaultValue="mia.chen" aria-invalid />
          <FieldDescription className="text-destructive">這個帳號已存在</FieldDescription>
        </Field>
      </Section>

      <Section title="Checkbox / Switch">
        <label className="flex items-center gap-2 text-body">
          <Checkbox defaultChecked /> 已勾選
        </label>
        <label className="flex items-center gap-2 text-body">
          <Checkbox /> 未勾選
        </label>
        <label className="flex items-center gap-2 text-body">
          <Checkbox checked="indeterminate" /> 半選
        </label>
        <label className="flex items-center gap-2 text-body">
          <Switch defaultChecked /> 開
        </label>
        <label className="flex items-center gap-2 text-body">
          <Switch /> 關
        </label>
      </Section>

      <Section title="Tabs">
        <Tabs defaultValue="general" className="w-full">
          <TabsList>
            <TabsTrigger value="general">一般</TabsTrigger>
            <TabsTrigger value="security">安全</TabsTrigger>
            <TabsTrigger value="notify">通知</TabsTrigger>
            <TabsTrigger value="features">功能開關</TabsTrigger>
          </TabsList>
          <TabsContent value="general" className="text-body text-muted-foreground">
            一般設定內容
          </TabsContent>
          <TabsContent value="security" className="text-body text-muted-foreground">
            安全設定內容
          </TabsContent>
        </Tabs>
      </Section>

      <Section title="Table / DropdownMenu / Pagination">
        <Card className="w-full">
          <CardHeader>
            <CardTitle>人員</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-10">
                    <Checkbox aria-label="全選" />
                  </TableHead>
                  <TableHead>成員</TableHead>
                  <TableHead>權限群組</TableHead>
                  <TableHead>狀態</TableHead>
                  <TableHead>最後登入</TableHead>
                  <TableHead className="w-16 text-right">操作</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {members.map((m) => (
                  <TableRow key={m.account}>
                    <TableCell>
                      <Checkbox aria-label={`選取 ${m.name}`} />
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarFallback>
                            {m.name
                              .split(' ')
                              .map((s) => s[0])
                              .join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="text-body-medium">{m.name}</div>
                          <div className="text-small text-muted-foreground">{m.account}</div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant={m.group.includes('管理員') ? 'soft' : 'muted'}>{m.group}</Badge>
                    </TableCell>
                    <TableCell>
                      <Badge variant={statusVariant[m.status as keyof typeof statusVariant]}>{m.status}</Badge>
                    </TableCell>
                    <TableCell className="text-muted-foreground">{m.last}</TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon-sm" aria-label="操作">
                            <Ellipsis />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>編輯</DropdownMenuItem>
                          <DropdownMenuItem>重設密碼</DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem variant="destructive">停用帳號</DropdownMenuItem>
                          <DropdownMenuItem variant="destructive">刪除帳號</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <div className="flex items-center justify-between">
              <span className="text-small text-muted-foreground">顯示 1–4，共 128 筆</span>
              <Pagination className="mx-0 w-auto">
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious href="#" />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#" isActive>
                      1
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">2</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">3</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">13</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext href="#" />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          </CardContent>
        </Card>
      </Section>

      <Section title="Dialog / Toast">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">帳號已建立（初始密碼）</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>帳號已建立</DialogTitle>
              <DialogDescription>
                把下面的帳號和初始密碼交給陳小明。密碼只顯示這一次，關掉就看不到了；對方首次登入會被要求改成自己的密碼。
              </DialogDescription>
            </DialogHeader>
            <div className="rounded-lg border bg-muted/40 p-3 text-body">
              <div className="flex items-center gap-3">
                <span className="w-16 text-muted-foreground">帳號</span>
                <span className="flex-1 font-mono">chen.xiaoming</span>
                <Button variant="ghost" size="icon-sm" aria-label="複製帳號">
                  <Copy />
                </Button>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-16 text-muted-foreground">初始密碼</span>
                <span className="flex-1 font-mono tracking-widest">••••••••••••</span>
                <Button variant="ghost" size="icon-sm" aria-label="顯示密碼">
                  <Eye />
                </Button>
                <Button variant="ghost" size="icon-sm" aria-label="複製密碼">
                  <Copy />
                </Button>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline">
                <Copy /> 複製帳號與密碼
              </Button>
              <Button>完成</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
        <Button variant="outline" onClick={() => toast.success('已新增 陳小明')}>
          Toast
        </Button>
      </Section>

      <Toaster />
    </main>
  )
}
