const SexKind = {
  NOTKNOWN: 'notknown',
  MALE: 'male',
  FEMALE: 'female',
  NOTAPPLICABLE: 'notapplicable'
} as const;
export type SexKind = typeof SexKind[keyof typeof SexKind];
export const SexKindValues = Object.values(SexKind);

export class Sex {
  public readonly kind: SexKind;

  constructor(kind: SexKind) {
    this.kind = kind;
  }

  toString(): string | null {
    return Sex.toString(this.kind);
  }

  static toString(kind: SexKind): string | null {
    switch (kind) {
      case SexKind.MALE:
        return '男性';
      case SexKind.FEMALE:
        return '女性';
      case SexKind.NOTAPPLICABLE:
        return 'その他';
      case SexKind.NOTKNOWN:
        return '不明';
      default:
        return null;
    }
  }

  static fromSlug(value: string): Sex {
    switch (value) {
      case 'notknown':
        return new Sex(SexKind.NOTKNOWN);
      case 'male':
        return new Sex(SexKind.MALE);
      case 'female':
        return new Sex(SexKind.FEMALE);
      case 'notapplicable':
        return new Sex(SexKind.NOTAPPLICABLE);
      default:
        return new Sex(SexKind.NOTKNOWN);
    }
  }

  static fromNumber(value: number): Sex {
    switch (value) {
      case 0:
        return new Sex(SexKind.NOTKNOWN);
      case 1:
        return new Sex(SexKind.MALE);
      case 2:
        return new Sex(SexKind.FEMALE);
      case 9:
        return new Sex(SexKind.NOTAPPLICABLE);
      default:
        return new Sex(SexKind.NOTKNOWN);
    }
  }
}

const EducationKind = {
  UNIVERSITY: 'university',
  GURADUATE_SCHOOL: 'guraduate_school',
  JUNIOR_COLLEGE: 'junior_college',
  VOCATIONAL_SCHOOL: 'vocational_school',
  JAPANESE_LANGUAGE_SCHOOL: 'japanese_language_school',
  OTHERS: 'others'
} as const;
export type EducationKind = typeof EducationKind[keyof typeof EducationKind];
export const EducationKindValues = Object.values(EducationKind);

export class Education {
  constructor(public readonly kind: EducationKind) { }

  static fromSlug(value: string): Education {
    switch (value) {
      case 'university':
        return new Education(EducationKind.UNIVERSITY);
      case 'guraduate_school':
        return new Education(EducationKind.GURADUATE_SCHOOL);
      case 'junior_college':
        return new Education(EducationKind.JUNIOR_COLLEGE);
      case 'vocational_school':
        return new Education(EducationKind.VOCATIONAL_SCHOOL);
      case 'japanese_language_school':
        return new Education(EducationKind.JAPANESE_LANGUAGE_SCHOOL);
      case 'others':
        return new Education(EducationKind.OTHERS);
      default:
        return new Education(EducationKind.OTHERS);
    }
  }

  static fromNumber(value: number): Education {
    switch (value) {
      case 0:
        return new Education(EducationKind.UNIVERSITY);
      case 1:
        return new Education(EducationKind.GURADUATE_SCHOOL);
      case 2:
        return new Education(EducationKind.JUNIOR_COLLEGE);
      case 3:
        return new Education(EducationKind.VOCATIONAL_SCHOOL);
      case 4:
        return new Education(EducationKind.JAPANESE_LANGUAGE_SCHOOL);
      case 5:
        return new Education(EducationKind.OTHERS);
      default:
        return new Education(EducationKind.OTHERS);
    }
  }

  toString(): string | null {
    return Education.toString(this.kind);
  }

  static toString(kind: EducationKind): string | null {
    switch (kind) {
      case EducationKind.UNIVERSITY:
        return '大学';
      case EducationKind.GURADUATE_SCHOOL:
        return '大学院';
      case EducationKind.JUNIOR_COLLEGE:
        return '短期大学';
      case EducationKind.VOCATIONAL_SCHOOL:
        return '専門学校';
      case EducationKind.JAPANESE_LANGUAGE_SCHOOL:
        return '日本語学校';
      case EducationKind.OTHERS:
        return 'その他';
      default:
        return null;
    }
  }
}

const EducationStateKind = {
  GURADUATED: 'guraduated',
  LARNING: 'larning'
} as const;
export type EducationStateKind = typeof EducationStateKind[keyof typeof EducationStateKind];
export const EducationStateKindValues = Object.values(EducationStateKind);

export class EducationState {
  constructor(public readonly kind: EducationStateKind) { }

  static fromSlug(value: string): EducationState | null {
    switch (value) {
      case 'guraduated':
        return new EducationState(EducationStateKind.GURADUATED);
      case 'larning':
        return new EducationState(EducationStateKind.LARNING);
      default:
        return null;
    }
  }

  static fromNumber(value: number): EducationState | null {
    switch (value) {
      case 0:
        return new EducationState(EducationStateKind.GURADUATED);
      case 1:
        return new EducationState(EducationStateKind.LARNING);
      default:
        return null;
    }
  }

  static toString(kind: EducationStateKind): string | null {
    switch (kind) {
      case EducationStateKind.GURADUATED:
        return '既卒';
      case EducationStateKind.LARNING:
        return '在学中';
      default:
        return null;
    }
  }
}

const QualificationKind = {
  SKILL_HUMANITY_INTERNATIONAL: 'skill_humanity_international',
  SPECIFIC_SKILL: 'specific_skill',
  TECHNICAL_INTERN_1: 'technical_intern_1',
  TECHNICAL_INTERN_2: 'technical_intern_2',
  TECHNICAL_INTERN_3: 'technical_intern_3',
  STUDY: 'study',
  SPECIFIC_ACTIVITY: 'specific_activity',
  NURSING: 'nursing',
  PROFESSION: 'profession',
  FAMILY: 'family',
  OTHERS: 'others'
}
export type QualificationKind = typeof QualificationKind[keyof typeof QualificationKind];
export const QualificationKindValues = Object.values(QualificationKind);

export class Qualification {
  constructor(public readonly kind: QualificationKind) { }

  static fromSlug(value: string) {
    switch (value) {
      case 'skill_humanity_international':
        return new Qualification(QualificationKind.SKILL_HUMANITY_INTERNATIONAL);
      case 'specific_skill':
        return new Qualification(QualificationKind.SPECIFIC_SKILL);
      case 'technical_intern_1':
        return new Qualification(QualificationKind.TECHNICAL_INTERN_1);
      case 'technical_intern_2':
        return new Qualification(QualificationKind.TECHNICAL_INTERN_2);
      case 'technical_intern_3':
        return new Qualification(QualificationKind.TECHNICAL_INTERN_3);
      case 'study':
        return new Qualification(QualificationKind.STUDY);
      case 'specific_activity':
        return new Qualification(QualificationKind.SPECIFIC_ACTIVITY);
      case 'nursing':
        return new Qualification(QualificationKind.NURSING);
      case 'profession':
        return new Qualification(QualificationKind.PROFESSION);
      case 'family':
        return new Qualification(QualificationKind.FAMILY);
      case 'others':
        return new Qualification(QualificationKind.OTHERS);
      default:
        return null;
    }
  }

  static fromNumber(value: number) {
    switch (value) {
      case 0:
        return new Qualification(QualificationKind.SKILL_HUMANITY_INTERNATIONAL);
      case 1:
        return new Qualification(QualificationKind.SPECIFIC_SKILL);
      case 2:
        return new Qualification(QualificationKind.TECHNICAL_INTERN_1);
      case 3:
        return new Qualification(QualificationKind.TECHNICAL_INTERN_2);
      case 4:
        return new Qualification(QualificationKind.TECHNICAL_INTERN_3);
      case 5:
        return new Qualification(QualificationKind.STUDY);
      case 6:
        return new Qualification(QualificationKind.SPECIFIC_ACTIVITY);
      case 7:
        return new Qualification(QualificationKind.NURSING);
      case 8:
        return new Qualification(QualificationKind.PROFESSION);
      case 9:
        return new Qualification(QualificationKind.FAMILY);
      case 10:
        return new Qualification(QualificationKind.OTHERS);
      default:
        return null;
    }
  }

  static toString(kind: QualificationKind): string | null {
    switch (kind) {
      case QualificationKind.SKILL_HUMANITY_INTERNATIONAL:
        return '技術・人文知識・国際業務';
      case QualificationKind.SPECIFIC_SKILL:
        return '特定技能1号';
      case QualificationKind.TECHNICAL_INTERN_1:
        return '技能実習1号';
      case QualificationKind.TECHNICAL_INTERN_2:
        return '技能実習2号';
      case QualificationKind.TECHNICAL_INTERN_3:
        return '技能実習3号';
      case QualificationKind.STUDY:
        return '留学';
      case QualificationKind.SPECIFIC_ACTIVITY:
        return '特定活動';
      case QualificationKind.NURSING:
        return '介護';
      case QualificationKind.PROFESSION:
        return '高度専門職';
      case QualificationKind.FAMILY:
        return '家族滞在';
      case QualificationKind.OTHERS:
        return 'その他';
      default:
        return null;
    }
  }

  toString(): string | null {
    return Qualification.toString(this.kind);
  }
}

const JLPTKind = {
  NONE: 'none',
  N_1: 'n_1',
  N_2: 'n_2',
  N_3: 'n_3',
  N_4: 'n_4',
  N_5: 'n_5',
  CLASS_1: 'class_1',
  CLASS_2: 'class_2',
  CLASS_3: 'class_3',
  CLASS_4: 'class_4'
} as const;
export type JLPTKind = typeof JLPTKind[keyof typeof JLPTKind];
export const JLPTKindValues = Object.values(JLPTKind);

export class JLPT {
  public readonly kind: JLPTKind;

  constructor(kind: JLPTKind) {
    this.kind = kind;
  }

  toString(): string | null {
    switch (this.kind) {
      case JLPTKind.NONE:
        return 'なし';
      case JLPTKind.N_1:
        return 'N1';
      case JLPTKind.N_2:
        return 'N2';
      case JLPTKind.N_3:
        return 'N3';
      case JLPTKind.N_4:
        return 'N4';
      case JLPTKind.N_5:
        return 'N5';
      case JLPTKind.CLASS_1:
        return '1級';
      case JLPTKind.CLASS_2:
        return '2級';
      case JLPTKind.CLASS_3:
        return '3級';
      case JLPTKind.CLASS_4:
        return '4級';
      default:
        return null;
    }
  }

  static fromSlug(value: string): JLPT | null {
    switch (value) {
      case 'none':
        return new JLPT(JLPTKind.NONE);
      case 'n_1':
        return new JLPT(JLPTKind.N_1);
      case 'n_2':
        return new JLPT(JLPTKind.N_2);
      case 'n_3':
        return new JLPT(JLPTKind.N_3);
      case 'n_4':
        return new JLPT(JLPTKind.N_4);
      case 'n_5':
        return new JLPT(JLPTKind.N_5);
      case 'class_1':
        return new JLPT(JLPTKind.CLASS_1);
      case 'class_2':
        return new JLPT(JLPTKind.CLASS_2);
      case 'class_3':
        return new JLPT(JLPTKind.CLASS_3);
      case 'class_4':
        return new JLPT(JLPTKind.CLASS_4);
      default:
        return null;
    }
  }

  static fromNumber(value: number): JLPT | null {
    switch (value) {
      case 0:
        return new JLPT(JLPTKind.NONE);
      case 1:
        return new JLPT(JLPTKind.N_1);
      case 2:
        return new JLPT(JLPTKind.N_2);
      case 3:
        return new JLPT(JLPTKind.N_3);
      case 4:
        return new JLPT(JLPTKind.N_4);
      case 5:
        return new JLPT(JLPTKind.N_5);
      case 6:
        return new JLPT(JLPTKind.CLASS_1);
      case 7:
        return new JLPT(JLPTKind.CLASS_2);
      case 8:
        return new JLPT(JLPTKind.CLASS_3);
      case 9:
        return new JLPT(JLPTKind.CLASS_4);
      default:
        return null;
    }
  }
}

export class Seeker {
  constructor(
    public readonly id: number,
    public readonly name: string,
    public readonly kana: string,
    public readonly birthday: string,
    public readonly sex: Sex,
    public readonly postalcode: string,
    public readonly address: string,
    public readonly email: string,
    public readonly nationality: string,
    public readonly education: Education,
    public readonly educationState: EducationState,
    public readonly educationSchool: string,
    public readonly qualification: string,
    public readonly jlpt: JLPT | null,
    public readonly acceptEmail: boolean,
    public readonly resumeId: number | null,
    public readonly password: string | null
  ) { }

  static deserialize(raw: string): Seeker {
    const obj = JSON.parse(raw);

    if(
      obj.sex?.kind === null || obj.sex?.kind === undefined ||
      obj.education?.kind === null || obj.education?.kind === undefined ||
      obj.educationState?.kind === null || obj.educationState?.kind === undefined
    ) {
      throw new Error('Any required fields are not found');
    }

    return Seeker.fromObject({
      ...obj,
      sex: obj.sex.kind,
      education: obj.education.kind,
      educationState: obj.educationState.kind,
      jlpt: obj.jlpt?.kind || null
    });
  }

  static fromObject(json: any): Seeker {
    if (
      json.id === undefined || json.id === null ||
      json.name === undefined || json.name === null ||
      json.kana === undefined || json.kana === null ||
      json.birthday === undefined || json.birthday === null ||
      json.sex === undefined || json.sex === null ||
      json.postalcode === undefined || json.postalcode === null ||
      json.address === undefined || json.address === null ||
      json.email === undefined || json.email === null ||
      json.nationality === undefined || json.nationality === null ||
      json.education === undefined || json.education === null ||
      json.educationState === undefined || json.educationState === null ||
      json.educationSchool === undefined || json.educationScholl === null ||
      json.qualification === undefined || json.qualification === null ||
      json.acceptEmail === undefined || json.acceptEmail === null
    ) {
      throw new Error('Any required fields are not found');
    }

    const sex = Sex.fromSlug(json.sex);
    const education = Education.fromSlug(json.education);
    const educationState = EducationState.fromSlug(json.educationState);
    const jlpt = json.jlpt ? JLPT.fromSlug(json.jlpt) : null;

    if (sex == null || education == null || educationState == null) {
      throw new Error('Some fields have invalid value');
    }

    return new Seeker(
      json.id,
      json.name,
      json.kana,
      json.birthday,
      sex,
      json.postalcode,
      json.address,
      json.email,
      json.nationality,
      education,
      educationState,
      json.educationSchool,
      json.qualification,
      jlpt,
      json.acceptEmail,
      json.resumeId,
      json.password || null
    );
  }
}

export class InputSeeker {
  constructor(
    public readonly name: string,
    public readonly kana: string,
    public readonly birthday: string,
    public readonly sex: string,
    public readonly postalcode: string,
    public readonly address: string,
    public readonly email: string,
    public readonly reEmail: string,
    public readonly nationality: string,
    public readonly education: string,
    public readonly educationState: string,
    public readonly educationSchool: string,
    public readonly qualification: string,
    public readonly jlpt: string | null,
    public readonly acceptEmail: string,
    public readonly password: string
  ) { }

  toSnake(): any {
    return {
      name: this.name,
      kana: this.kana,
      birthday: this.birthday,
      sex: this.sex,
      postalcode: this.postalcode,
      address: this.address,
      email: this.email,
      nationality: this.nationality,
      education: this.education,
      education_state: this.educationState,
      education_school: this.educationSchool,
      qualification: this.qualification,
      jlpt: this.jlpt,
      accept_email: this.acceptEmail === 'yes',
      password: this.password
    }
  }

  static fromObject(obj: any): InputSeeker {
    if (
      !obj.name ||
      !obj.kana ||
      !obj.birthday ||
      obj.sex === null || obj.sex === undefined ||
      !obj.postalcode ||
      !obj.address ||
      !obj.email ||
      !obj.reEmail ||
      !obj.nationality ||
      obj.education === null || obj.education === undefined ||
      obj.educationState === null || obj.educationState === undefined ||
      !obj.educationSchool ||
      !obj.password
    ) {
      throw new Error('Any required fields are not found');
    }

    return new InputSeeker(
      obj.name,
      obj.kana,
      obj.birthday,
      obj.sex,
      obj.postalcode,
      obj.address,
      obj.email,
      obj.reEmail,
      obj.nationality,
      obj.education,
      obj.educationState,
      obj.educationSchool,
      obj.qualification,
      obj.jlpt || null,
      obj.acceptEmail,
      obj.password
    )
  }
}

export class InputSeekerHashed extends InputSeeker {}

export class Credential {
  constructor(
    public readonly email: string,
    public readonly password: string
  ) {}

  static fromObject(obj: any): Credential {
    if(!obj.email || !obj.password) {
      throw new Error('Any required fields are not found');
    }

    return new Credential(obj.email, obj.password);
  }
}
