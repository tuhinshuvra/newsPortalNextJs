import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';

const CreateNews = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        fetch("/api/news", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.insertedId) {
                    toast.success("Successfully created a New News.")
                }
            });
    };

    return (
        <div>
            <form
                className=''
                onSubmit={handleSubmit(onSubmit)}
                name='form_item_path'
                layout="vertical"
                style={{
                    width: "50%",
                    margin: "50px auto",
                }}
            >

                <input
                    type='text'
                    {...register("id")}
                    placeholder='Id'
                    style={{ marginBottom: "10px" }}
                /> <br />

                <input
                    type='text'
                    {...register("description")}
                    placeholder='Description'
                    style={{ margin: "10px 0px" }}
                /> <br />

                <input
                    type='text'
                    {...register("author")}
                    placeholder='Author'
                    style={{ margin: "10px 0px" }}
                /> <br />
                <input
                    {...register("release_date")}
                    placeholder='Release Date'
                    type='date'
                    style={{ margin: "10px 0px" }}
                /> <br />
                <input
                    {...register("category")}
                    placeholder='Category'
                    type='text'
                /> <br />
                <input
                    {...register("comment_count")}
                    placeholder='No of Comments'
                    type='number'
                    style={{ margin: "10px 0px" }}
                /> <br />
                <input  {...register("image_url")} placeholder='Image Url' /> <br />
                <input type="submit" value="Create News" style={{ margin: "10px 0px", width: "100%" }} />



            </form>

        </div>
    );
};

export default CreateNews;