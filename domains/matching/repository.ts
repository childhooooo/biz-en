import { Job } from './entities/job';

export function getJobListSize(): number {
  return 4;
}

export function getDummyJob(id: string): Job {
  return Job.fromJsonObject({
    id: '1',
    name: '機械設計エンジニア',
    position: '機械設計エンジニア',
    categories: [{
      id: '1',
      slug: 'full-time',
      name: '正社員',
      color: '#0096ff'
    }],
    description: '各分野の製造装置、プラント、自動車関連部品の機械設計エンジニア・自動車分野設備機械などの機械設備設計業務を担当',
    workAt: '群馬県太田市',
    salary: '月給250,000円〜',
    officeHours: '8:00〜17:00（実働8時間）',
    holiday: '完全週休2日制（土日祝）',
    qualifications: '・日本語：ビジネスレベル<br/>・ベトナム語：ネイティブに近いレベル<br/>・基本的なPCスキル（日本語でのデータ入力があります）<br/>・長期勤務ができる方<br/>・土日祝日もシフトに入れる方',
    employmentStatus: '正社員',
    stateOfResidence: '技術・人文知識・国際業務または特定技能1号<br/>留学または特別活動（就職活動のため・ワーキングホリデー）',
    welfare: '社会保険完備、社員食堂',
    flow: '書類選考 ⇒ 職場見学'
  });
}

export function getDummyJobList(): Job[] {
  return [
    Job.fromJsonObject({
      id: '1',
      name: '機械設計エンジニア',
      position: '機械設計エンジニア',
      categories: [{
        id: '1',
        slug: 'full-time',
        name: '正社員',
        color: '#0096ff'
      }],
      description: '各分野の製造装置、プラント、自動車関連部品の機械設計エンジニア・自動車分野設備機械などの機械設備設計業務を担当',
      workAt: '群馬県太田市',
      salary: '月給250,000円〜',
      officeHours: '8:00〜17:00（実働8時間）',
      holiday: '完全週休2日制（土日祝）',
      qualifications: '・日本語：ビジネスレベル<br/>・ベトナム語：ネイティブに近いレベル<br/>・基本的なPCスキル（日本語でのデータ入力があります）<br/>・長期勤務ができる方<br/>・土日祝日もシフトに入れる方',
      employmentStatus: '正社員',
      stateOfResidence: '技術・人文知識・国際業務または特定技能1号<br/>留学または特別活動（就職活動のため・ワーキングホリデー）',
      welfare: '社会保険完備、社員食堂',
      flow: '書類選考 ⇒ 職場見学'
    }),
    Job.fromJsonObject({
      id: '1',
      name: '機械設計エンジニア',
      position: '機械設計エンジニア',
      categories: [{
        id: '1',
        slug: 'full-time',
        name: '正社員',
        color: '#0096ff'
      }],
      description: '各分野の製造装置、プラント、自動車関連部品の機械設計エンジニア・自動車分野設備機械などの機械設備設計業務を担当',
      workAt: '群馬県太田市',
      salary: '月給250,000円〜',
      officeHours: '週単位の変形労働時間制<br/>①6:00〜15:00 ②14:00〜23:00<br/>③22:00〜翌7:00',
      holiday: '完全週休2日制（土日祝）',
      qualifications: '・日本語：ビジネスレベル<br/>・ベトナム語：ネイティブに近いレベル<br/>・基本的なPCスキル（日本語でのデータ入力があります）<br/>・長期勤務ができる方<br/>・土日祝日もシフトに入れる方',
      employmentStatus: '正社員',
      stateOfResidence: '技術・人文知識・国際業務または特定技能1号<br/>留学または特別活動（就職活動のため・ワーキングホリデー）',
      welfare: '社会保険完備、社員食堂',
      flow: '書類選考 ⇒ 職場見学'
    }),
    Job.fromJsonObject({
      id: '1',
      name: '機械設計エンジニア',
      position: '機械設計エンジニア',
      categories: [{
        id: '1',
        slug: 'full-time',
        name: '正社員',
        color: '#0096ff'
      }],
      description: '各分野の製造装置、プラント、自動車関連部品の機械設計エンジニア・自動車分野設備機械などの機械設備設計業務を担当',
      workAt: '群馬県太田市',
      salary: '月給250,000円〜',
      officeHours: '8:00〜17:00（実働8時間）',
      holiday: '完全週休2日制（土日祝）',
      qualifications: '・日本語：ビジネスレベル<br/>・ベトナム語：ネイティブに近いレベル<br/>・基本的なPCスキル（日本語でのデータ入力があります）<br/>・長期勤務ができる方<br/>・土日祝日もシフトに入れる方',
      employmentStatus: '正社員',
      stateOfResidence: '技術・人文知識・国際業務または特定技能1号<br/>留学または特別活動（就職活動のため・ワーキングホリデー）',
      welfare: '社会保険完備、社員食堂',
      flow: '書類選考 ⇒ 職場見学'
    }),
    Job.fromJsonObject({
      id: '1',
      name: '機械設計エンジニア',
      position: '機械設計エンジニア',
      categories: [{
        id: '1',
        slug: 'full-time',
        name: '正社員',
        color: '#0096ff'
      }],
      description: '各分野の製造装置、プラント、自動車関連部品の機械設計エンジニア・自動車分野設備機械などの機械設備設計業務を担当',
      workAt: '群馬県太田市',
      salary: '月給250,000円〜',
      officeHours: '8:00〜17:00（実働8時間）',
      holiday: '完全週休2日制（土日祝）',
      qualifications: '・日本語：ビジネスレベル<br/>・ベトナム語：ネイティブに近いレベル<br/>・基本的なPCスキル（日本語でのデータ入力があります）<br/>・長期勤務ができる方<br/>・土日祝日もシフトに入れる方',
      employmentStatus: '正社員',
      stateOfResidence: '技術・人文知識・国際業務または特定技能1号<br/>留学または特別活動（就職活動のため・ワーキングホリデー）',
      welfare: '社会保険完備、社員食堂',
      flow: '書類選考 ⇒ 職場見学'
    }),
  ];
}
