const SexKind = {
  NOTKNOWN: 0,
  MALE: 1,
  FEMALE: 2,
  NOTAPPLICABLE: 9
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
    switch(kind) {
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

  static fromNumber(value: number): Sex {
    switch(value) {
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
  UNIVERSITY: 0,
  GURADUATE_SCHOOL: 1,
  JUNIOR_COLLEGE: 2,
  VOCATIONAL_SCHOOL: 3,
  JAPANESE_LANGUAGE_SCHOOL: 4,
  OTHERS: 9
} as const;
export type EducationKind = typeof EducationKind[keyof typeof EducationKind];
export const EducationKindValues = Object.values(EducationKind);

export class Education {
  constructor(public readonly kind: EducationKind) {}

  static fromNumber(value: number): Education {
    switch(value) {
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
    switch(kind) {
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
  GURADUATED: 0,
  LARNING: 1
} as const;
export type EducationStateKind = typeof EducationStateKind[keyof typeof EducationStateKind];
export const EducationStateKindValues = Object.values(EducationStateKind);

export class EducationState {
  constructor(public readonly kind: EducationStateKind) {}

  static fromNumber(value: number): EducationState | null {
    switch(value) {
      case 0:
        return new EducationState(EducationStateKind.GURADUATED);
      case 1:
        return new EducationState(EducationStateKind.LARNING);
      default:
        return null;
    }
  }

  static toString(kind: EducationStateKind): string | null {
    switch(kind) {
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
  SKILL_HUMANITY_INTERNATIONAL: 0,
  SPECIFIC_SKILL: 1,
  TECHNICAL_INTERN_1: 2,
  TECHNICAL_INTERN_2: 3,
  TECHNICAL_INTERN_3: 4,
  STUDY: 5,
  SPECIFIC_ACTIVITY: 6,
  NURSING: 7,
  PROFESSION: 8,
  FAMILY: 9,
  OTHERS: 10
}
export type QualificationKind = typeof QualificationKind[keyof typeof QualificationKind];
export const QualificationKindValues = Object.values(QualificationKind);

export class Qualification {
  constructor(public readonly kind: QualificationKind) {}

  static fromNumber(value: number) {
    switch(value) {
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
    switch(kind) {
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
  NONE: 0,
  N_1: 1,
  N_2: 2,
  N_3: 3,
  N_4: 4,
  N_5: 5,
  CLASS_1: 6,
  CLASS_2: 7,
  CLASS_3: 8,
  CLASS_4: 9
} as const;
export type JLPTKind = typeof JLPTKind[keyof typeof JLPTKind];
export const JLPTKindValues = Object.values(JLPTKind);

export class JLPT {
  public readonly kind: JLPTKind;

  constructor(kind: JLPTKind) {
    this.kind = kind;
  }

  toString(): string | null {
    switch(this.kind) {
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

  static fromNumber(value: number): JLPT | null {
    switch(value) {
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
    public readonly id: string,
    public readonly useId: string,
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
    public readonly jlpt: JLPT,
    public readonly acceptEmail: boolean,
    public readonly password: string | null
  ) {}

  static fromJsonObject(json: any): Seeker {
    if(
      json.id === undefined || json.id === null ||
      json.useId === undefined || json.useId === null ||
      json.name === undefined || json.name === null ||
      json.kana === undefined || json.kana === null ||
      json.birthday === undefined || json.birthday === null ||
      json.sex === undefined || json.sex === null ||
      json.postalcode === undefined || json.postalcode === null ||
      json.address === undefined || json.address === null ||
      json.email === undefined || json.email === null ||
      json.nationality === undefined || json.nationality === null ||
      json.education === undefined || json.education === null ||
      json.educationStatus === undefined || json.educationStatus === null ||
      json.educationSchool === undefined || json.educationScholl === null ||
      json.qualification === undefined || json.qualification === null ||
      json.jlpt === undefined || json.jlpt === null ||
      json.acceptEmail === undefined || json.acceptEmail === null
    ) {
      throw new Error('Some required fields are not found');
    }

    const sexKind = typeof json.sex === 'string' ? parseInt(json.sex) : json.sex;
    const educationKind = typeof json.education === 'string' ? parseInt(json.education) : json.education;
    const educationStateKind = typeof json.educationState === 'string' ? parseInt(json.educationState) : json.educationState;
    const jlptKind = typeof json.jlpt === 'string' ? parseInt(json.jlpt) : json.jlpt;

    if(isNaN(sexKind) || isNaN(educationKind) || isNaN(educationStateKind) || isNaN(jlptKind)) {
      throw new Error('Some fields have invalid value');
    }

    const sex = new Sex(sexKind);
    const education = new Education(educationKind);
    const educationState = new EducationState(educationStateKind);
    const jlpt = new JLPT(jlptKind);

    if(sex == null || education == null || educationState == null || jlpt == null) {
      throw new Error('Some fields have invalid value');
    }

    return new Seeker(
      json.id,
      json.useId,
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
      json.password || null
    );
  }
}
