import { withStyles } from "@mui/styles";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchData } from "../../actions/homePageAction";
import Course from "../../components/Home/Course";
import Set from "../../components/Home/Set";
import { style } from "./style";
import AddIcon from '@mui/icons-material/Add';
import { Button, Card, CardContent, TextField } from "@mui/material";
import { Box } from "@mui/system";
import CourseDialog from "../../components/Home/CourseDialog";
import SetCardDialog from "../../components/Home/SetCardDialog";
import { clearFields, initialize, reset, SubmissionError } from "redux-form";
import { MessageType } from "../../constants/config";
import { showAlertMessage } from "../../utils/ToastHelper";
import { homeService } from './../../actionServices/HomeService'
import * as message from './../../constants/message'
import ConfirmDialog from './../../components/Shared/Common/confirmDialog'
import { ButtonType, MESSAGE_CONFIRM, MESSAGE_TITLE } from "../../constants/layout";
import { Route } from "react-router";
const HomePage = (props) => {
    const [courseDiaglog, setCourseDiaglog] = useState({ open: false })
    const [setCardDiaglog, setSetCardDiaglog] = useState({ open: false })
    const [isEditCourse, setIsEditCourse] = useState(false);
    const [isEditSetCard, setIsEditSetCard] = useState(false);
    const [confirmOpen, setConfirmOpen] = useState(false);
    const [dataConfirm, setDataConfirm] = useState(null);
    const [confirmOpenSetCard, setConfirmOpenSetCard] = useState(false);
    const [dataConfirmSetCard, setDataConfirmSetCard] = useState(null);
    var { courseList, fetchData, classes, initialValues, resetCourseDialog, initCourseDialog, resetSetCardDialog, initSetCardDialog } = props;
    var openCourse = courseDiaglog.open;
    var openSetCard = setCardDiaglog.open;
    useEffect(() => {
        fetchData();
    }, []);
    const addCourse = () => {
        toggleCourseDialog(true);
        setIsEditCourse(false);
    }
    const toggleCourseDialog = (open) => {
        setCourseDiaglog({ open });
        resetCourseDialog();
    }
    const toggleSetCardDialog = (open) => {
        setSetCardDiaglog({ open });
        resetSetCardDialog();
    }
    const ignoreDeleteCourse = () => {
        setConfirmOpen(false);
    }
    const confirmDelete = (data) => {
        setConfirmOpen(true);
        setDataConfirm(data);
    }
    const confirmDeleteSetCard = (data) => {
        setConfirmOpenSetCard(true);
        setDataConfirmSetCard(data);
    }
    const ignoreDeleteSetCard = () => {
        setConfirmOpenSetCard(false);
    }
    const deleteSetCard = (data) => {
        homeService.deleteSetCard(data).then(res => {
            showAlertMessage(res.message, MessageType.SUCCESS);
            setConfirmOpenSetCard(false);
            fetchData();
        }).catch(err => {
            if ([500].indexOf(err.response?.status) !== -1) {
                showAlertMessage(err.response.data.message, MessageType.ERROR);

            } else
                showAlertMessage(message.SERVER_FAIL, MessageType.ERROR);
            setConfirmOpenSetCard(false);
        });
    }
    const deleteCourse = (course) => {
        homeService.deleteCourse(course).then(res => {
            showAlertMessage(res.message, MessageType.SUCCESS);
            setConfirmOpen(false);
            fetchData();
        }).catch(err => {
            if ([500].indexOf(err.response?.status) !== -1) {
                showAlertMessage(err.response.data.message, MessageType.ERROR);

            } else
                showAlertMessage(message.SERVER_FAIL, MessageType.ERROR);
            setConfirmOpen(false);
        });
    }
    const editCourse = (course) => {
        toggleCourseDialog(true);
        initCourseDialog(course);
        setIsEditCourse(true);
    }
    const addSetCard = (courseId) => {
        toggleSetCardDialog(true);
        initSetCardDialog({ courseId });
        setIsEditSetCard(false);
    }
    const editSetCard = (setCard) => {
        toggleSetCardDialog(true);
        initSetCardDialog(setCard);
        setIsEditSetCard(true);
    }
    const showCourseList = (courseList) => {
        return courseList.map((item, index) => {
            console.log(item.setList);
            return (

                <div class={`row ${classes.courseListPanel}`}>
                    <Card sx={{ minWidth: 275 }}>
                        <CardContent>
                            <Course key={index} course={{ courseName: item.courseName, courseId: item.courseId }}
                                total={item.totalCard}
                                onDelete={confirmDelete}
                                onEdit={editCourse}
                                onAddSetCard={addSetCard}
                            >
                                {showSetList(item.listSetCard)}
                            </Course>
                        </CardContent>
                    </Card>
                    <hr ></hr>
                </div>
            )
        })
    }
    const submitCourse = (data) => {
        return homeService.saveCourse(data).then(res => {
            showAlertMessage(res.message, MessageType.SUCCESS);
            toggleCourseDialog(false);
            fetchData();
        }).catch(err => {
            if ([500].indexOf(err.response?.status) !== -1) {
                throw new SubmissionError({
                    _error: err.response.data.message
                })
            } else
                throw new SubmissionError({
                    _error: message.SERVER_FAIL
                })
        });
    }
    const submitSetCard = (data) => {
        return homeService.saveSetCard(data).then(res => {
            showAlertMessage(res.message, MessageType.SUCCESS);
            toggleSetCardDialog(false);
            fetchData();
        }).catch(err => {
            if ([500].indexOf(err.response?.status) !== -1) {
                throw new SubmissionError({
                    _error: err.response.data.message
                })
            } else
                throw new SubmissionError({
                    _error: message.SERVER_FAIL
                })
        });
    }
    const showSetList = (listSetCard) => {
        var result = null;
        result = listSetCard.map((item, index) => {
            return (
                <Set key={index} setCard={item} total={item.totalCard} onEdit={editSetCard} onDelete={confirmDeleteSetCard} />
            )
        })
        return (<div class={`row ${classes.setListPanel}`}>
            {result}
        </div>)
    }
    return (
        <div class={`container-fluid ${classes.container}`}>

            <div class="row" >

                <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                </div>
                <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">

                    <div class="row">
                        <Box className={classes.addCourseBtn}>
                            <Button color="info" variant="contained" type="submit" onClick={addCourse} startIcon={<AddIcon />} >
                                Add Course
                            </Button>
                        </Box>
                    </div>

                    {showCourseList(courseList)}
                </div>
                <div class="col-xs-3 col-sm-9 col-md-9 col-lg-9">
                </div>

            </div>
            <CourseDialog open={openCourse} title={isEditCourse ? `Update Course` : 'Add Course'}
                onSubmitCourse={submitCourse}
                initialValues={initialValues}
                handleClose={() => toggleCourseDialog(false)} />
            <SetCardDialog open={openSetCard} title={isEditSetCard ? `Update Set` : 'Add Set'}
                onSubmitSetCard={submitSetCard}
                initialValues={initialValues}
                handleClose={() => toggleSetCardDialog(false)} />
            <ConfirmDialog open={confirmOpen}
                agreeButton={ButtonType.AGREE}
                ignoreButton={ButtonType.DISAGREE}
                content={MESSAGE_CONFIRM.DELETE}
                title={MESSAGE_TITLE.DELETE_TASK}
                handleIgnore={ignoreDeleteCourse}
                handleAgree={deleteCourse}
                data={dataConfirm}
            />
            <ConfirmDialog open={confirmOpenSetCard}
                agreeButton={ButtonType.AGREE}
                ignoreButton={ButtonType.DISAGREE}
                content={MESSAGE_CONFIRM.DELETE}
                title={MESSAGE_TITLE.DELETE_TASK}
                handleIgnore={ignoreDeleteSetCard}
                handleAgree={deleteSetCard}
                data={dataConfirmSetCard}
            />
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        courseList: state.homePage.courseList,
        initialValues: state.homePage.initCourseForm
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: () => {
            dispatch(fetchData());
        },
        resetCourseDialog: () => {
            dispatch(initialize('courseDialog', null))
        },
        initCourseDialog: (data) => {
            dispatch(initialize('courseDialog', data))
        },
        resetSetCardDialog: () => {
            dispatch(initialize('setCardDialog', null))
        },
        initSetCardDialog: (data) => {
            dispatch(initialize('setCardDialog', data))
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(style)(HomePage));