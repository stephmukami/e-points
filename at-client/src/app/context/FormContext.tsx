'use client'

import React, { createContext, useState, useContext, ReactNode } from 'react';

interface FormData {
  Age: number;
  Gender: number;
  SocioeconomicStatus: number;
  BMI: number;
  Smoking: number;
  AlcoholConsumption: number;
  PhysicalActivity: number;
  DietQuality: number;
  SleepQuality: number;
  FamilyHistoryDiabetes: number;
  GestationalDiabetes: number;
  PreviousPreDiabetes: number;
  Hypertension: number;
  AntihypertensiveMedications: number;
  AntidiabeticMedications: number;
  FrequentUrination: number;
  ExcessiveThirst: number;
  UnexplainedWeightLoss: number;
  FatigueLevels: number;
  BlurredVision: number;
  SlowHealingSores: number;
  TinglingHandsFeet: number;
}

interface FormContextType {
  formData: FormData;
  updateFormData: (key: keyof FormData, value: number) => void;
}

const FormContext = createContext<FormContextType | null>(null);

interface FormProviderProps {
  children: ReactNode;
}

export const FormProvider: React.FC<FormProviderProps> = ({ children }) => {
  const [formData, setFormData] = useState<FormData>({
    Age: 0,
    Gender: 0,
    SocioeconomicStatus: 0,
    BMI: 0,
    Smoking: 0,
    AlcoholConsumption: 0,
    PhysicalActivity: 0,
    DietQuality: 0,
    SleepQuality: 0,
    FamilyHistoryDiabetes: 0,
    GestationalDiabetes: 0,
    PreviousPreDiabetes: 0,
    Hypertension: 0,
    AntihypertensiveMedications: 0,
    AntidiabeticMedications: 0,
    FrequentUrination: 0,
    ExcessiveThirst: 0,
    UnexplainedWeightLoss: 0,
    FatigueLevels: 0,
    BlurredVision: 0,
    SlowHealingSores: 0,
    TinglingHandsFeet: 0,
  });

  const updateFormData = (key: keyof FormData, value: number) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <FormContext.Provider value={{ formData, updateFormData }}>
      {children}
    </FormContext.Provider>
  );
};

export const useForm = (): FormContextType => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error('useForm must be used within a FormProvider');
  }
  return context;
};
