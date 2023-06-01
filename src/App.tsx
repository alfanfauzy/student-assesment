import { Controller, useForm } from "react-hook-form";
import AtomSelect from "./components/atoms/select";
import { Assesment, assesstmentSchema } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

function App() {
    const [result, setResult] = useState<{}>({});

    const options = [
        { value: 1, label: 1 },
        { value: 2, label: 2 },
        { value: 3, label: 3 },
        { value: 4, label: 4 },
        { value: 5, label: 5 },
        { value: 6, label: 6 },
        { value: 7, label: 7 },
        { value: 8, label: 8 },
        { value: 9, label: 9 },
        { value: 10, label: 10 },
    ];

    const { control, handleSubmit } = useForm<Assesment>({
        resolver: zodResolver(assesstmentSchema),
    });

    const onSubmit = (data: Assesment) => setResult(data);

    return (
        <div className="bg-slate-200 min-h-screen w-full flex flex-col gapitems-center justify-center border ">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col gap-5 mx-auto justify-end items-end w-[600px]">
                    <table className="rounded-md">
                        <thead className="bg-gray-500 ">
                            <tr>
                                <th></th>
                                <th
                                    className="px-6 py-2 text-xs text-white"
                                    rowSpan={2}
                                >
                                    Aspek Penilitian 1
                                </th>
                                <th className="px-6 py-2 text-xs text-white">
                                    Aspek Penilitian 2
                                </th>
                                <th className="px-6 py-2 text-xs text-white">
                                    Aspek Penilitian 3
                                </th>
                                <th className="px-6 py-2 text-xs text-white">
                                    Aspek Penilitian 4
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white">
                            {[...Array(10)].map((x, index_mahasiswa) => (
                                <tr
                                    className="whitespace-nowrap"
                                    key={index_mahasiswa + 1}
                                >
                                    <td className="px-6 py-4">
                                        <div className="text-sm text-gray-900">
                                            Mahasiswa {index_mahasiswa + 1}
                                        </div>
                                    </td>
                                    {[...Array(4)].map((x, index_penilaian) => (
                                        <td
                                            className="text-sm text-gray-500 px-2"
                                            key={index_penilaian}
                                        >
                                            <Controller
                                                control={control}
                                                defaultValue="1"
                                                name={`aspek_penilaian_${
                                                    index_penilaian + 1
                                                }.mahasiswa_${
                                                    index_mahasiswa + 1
                                                }`}
                                                render={({
                                                    field: { onChange },
                                                }) => (
                                                    <AtomSelect
                                                        options={options}
                                                        onSelect={onChange}
                                                    />
                                                )}
                                            />
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <button className="w-[100px] bg-teal-600">Submit</button>
                    <div className="bg-slate-400 p-2 w-full rounded-md">
                        <pre>{JSON.stringify(result, null, 2)}</pre>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default App;
