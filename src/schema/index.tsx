import { z } from "zod";

export const assesstmentSchema = z.object({
    aspek_penilaian_1: createMahasiswaObject(),
    aspek_penilaian_2: createMahasiswaObject(),
    aspek_penilaian_3: createMahasiswaObject(),
    aspek_penilaian_4: createMahasiswaObject(),
});

function createMahasiswaObject() {
    const mahasiswaObject: { [key: string]: z.ZodType<string> } = {};
    for (let i = 1; i <= 10; i++) {
        mahasiswaObject[`mahasiswa_${i}`] = z.string();
    }
    return z.object(mahasiswaObject);
}

export type Assesment = z.infer<typeof assesstmentSchema>;
